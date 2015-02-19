function Node (e) {
	this.element = e;
	this.next = null;
}

function LinkedList () {
	this.head = new Node("head"); 
	this.tailInsert = function(n) { //inserts new node at tail
		var nav = this.head;
		while (nav.next != null) {nav = nav.next}
		nav.next = n;
		return n
	},
	this.print = function() { //prints entire list
		var nav = this.head;
		while (nav.next != null) {
			console.log(nav )
			console.log("---> \n")
			nav = nav.next
		}
	},
	this.remove = function(d) { //removes any node with element of same value
		var nav = this.head,
			prev = "";

		while (nav != null) {

			if (nav.element == d){
				prev.next = nav.next;
			} 

			prev = nav
			nav = nav.next;
		}
	}
}

//populate list
var ll = new LinkedList();

ll.tailInsert(new Node("23"));

for (i=0; i<=25; i++) {
 	ll.tailInsert(new Node(i.toString()));
}

ll.tailInsert(new Node("23"));

ll.print();
ll.remove("23");
ll.print();

