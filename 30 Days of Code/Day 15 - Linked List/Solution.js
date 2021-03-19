function Node(data){
  this.data=data;
  this.next=null;
}

function Solution(){

this.insert=function(head,data){   
      var start = head;   
      var element = new Node(data)
      if (!start){
          start = element
          return start
      }
      while(start){
          if(!start.next){
            start.next = element
            return head
          }
          start=start.next;
      }
  };
}