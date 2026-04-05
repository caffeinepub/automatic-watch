import Text "mo:core/Text";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";

actor {
  type Watch = {
    name : Text;
    description : Text;
    price : Nat;
    category : Text;
  };

  module Watch {
    public func compareByName(watch1 : Watch, watch2 : Watch) : Order.Order {
      Text.compare(watch1.name, watch2.name);
    };
  };

  type ContactRequest = {
    name : Text;
    email : Text;
    message : Text;
  };

  module ContactRequest {
    public func compare(contact1 : ContactRequest, contact2 : ContactRequest) : Order.Order {
      Text.compare(contact1.name, contact2.name);
    };
  };

  let watches = Map.empty<Text, Watch>();
  let newsletterSubscribers = Map.empty<Text, ()>();
  let consultationRequests = Map.empty<Text, ContactRequest>();

  public shared ({ caller }) func addWatch(watch : Watch) : async () {
    watches.add(watch.name, watch);
  };

  public query ({ caller }) func getWatch(name : Text) : async Watch {
    switch (watches.get(name)) {
      case (null) { Runtime.trap("Watch not found") };
      case (?watch) { watch };
    };
  };

  public query ({ caller }) func getAllWatches() : async [Watch] {
    watches.values().toArray().sort(Watch.compareByName);
  };

  public shared ({ caller }) func subscribeNewsletter(email : Text) : async () {
    newsletterSubscribers.add(email, ());
  };

  public shared ({ caller }) func submitContactRequest(request : ContactRequest) : async () {
    consultationRequests.add(request.name, request);
  };

  public query ({ caller }) func getRequest(name : Text) : async ContactRequest {
    switch (consultationRequests.get(name)) {
      case (null) { Runtime.trap("Request not found") };
      case (?request) { request };
    };
  };

  public query ({ caller }) func getAllContactRequests() : async [ContactRequest] {
    consultationRequests.values().toArray().sort();
  };
};
