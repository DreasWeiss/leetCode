var mergeTwoLists = function(list1, list2) {
    let d = new ListNode(0);
    let h = d;

    while(list1 && list2) {
        if (list1.val <= list2.val) {
            d.next = list1;
            list1 = list1.next;
        } else {
            d.next = list2;
            list2 = list2.next;
        }
        d=d.next
    }
    if(list1!==null) {
        d.next = list1;
    } else {
        d.next = list2;
    }

    return h.next;
};

console.log(mergeTwoLists([1,2,4],[1,3,4])); 
// [1,1,2,3,4,4]
console.log(mergeTwoLists([],[0])); 
// [0]
console.log(mergeTwoLists([],[])); 
// []