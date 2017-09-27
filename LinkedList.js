//made new file
const Node = require('./node.js');
const LinkedList= function(){
  let root=new Node(undefined, null);
  let length=0;
  let lastnode=root;

  function has (node){
    let start=root;
    for(let r=0, r<length; r++){
      if(start.getValue()==node.getValue()){
        returntrue;
      }
    else{
      start=start.getNext();
    }
    }
    return false;
  }
  function add(node){
    lastnode.setNext(node);
    lastnode=node;
  }
  function remove(node){
    let temp=new Node (undefined, null);
    let start= root;
    let last;
    while(start.getValue()!=node.getValue()){
      last=start;
      start=start.getNext();
    }
    temp.setValue(startNext(.getvalue;()));
    temp.setNext(start.getNext(.getNext()));
    last;
      last.setNext(temp);
  }
}
