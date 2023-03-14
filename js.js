const node = function(nodeValue = null, nextNode = null) {
    const value = () => {return nodeValue};
    
    const getnextNode = () => {return nextNode};
    
    const setNextNode = (newNextNode) => nextNode = newNextNode;

    return {value, getnextNode, setNextNode};
}

const linkedList = function(headNode, tailNode = headNode, size = 1) {

    const append = (value) => {
        const newNode = node(value);
        tailNode.setNextNode(newNode);
        tailNode = newNode;
        size++;
    }

    const prepend = (value) => {
        const newNode = node(value);
        newNode.setNextNode(headNode);
        headNode = newNode;
        size++;
    }

    const getSize = () => {
        return size;
    }

    const head = () => {
        return headNode;
    }

    const tail = () => {
        return tailNode;
    }

    const pop = () => {
        let tailfound = false;
        let currentNode = headNode;
        let previousNode;
        while(!tailfound){
            if (currentNode.getNextNode() === null){

                currentNode = null;
                previousNode.setNextNode(null);
                tailNode = previousNode;

                tailfound = true;

            } else {
                previousNode = currentNode;
                currentNode = currentNode.getNextNode();
            }
        }
    }

    const contains = (value) => {
        
        let tailfound = false;
        let currentNode = headNode;

        while(!tailfound){
            if (currentNode.value() === value){
                
                return true;

            } else if (currentNode.getNextNode() === null) {

                tailfound = true;

            } else {

                currentNode = currentNode.getNextNode();

            }
        }

        return false;
    }

    const find = (value) => {
        let tailfound = false;
        let currentNode = headNode;
        let index = 0;

        while(!tailfound){
            if (currentNode.value() === value){
                
                return index;

            } else if (currentNode.getNextNode() === null) {

                tailfound = true;

            } else {

                currentNode = currentNode.getNextNode();
                ++index;
            }
        }

        return null;
    }

    const toString = () => {
        let tailfound = false;
        let currentNode = headNode;
        let outputString = '';

        while(!tailfound){
            if (currentNode.getNextNode() === null) {
                outputString += 'null';

                tailfound = true;

            } else {
                outputString += `( ${currentNode.value()} ) -> `;
                currentNode = currentNode.getNextNode();
            }
        }

        return outputString;
    }

    return {append, prepend, getSize, head, tail, pop, contains, find, toString};

}

    
