const createEl = (parent, arr, className) => {
    for (var i = 0; i < arr.length; i++) {
        var el = document.createElement(arr[i]);
        el.setAttribute('class', className);
        if(parent != null){
            parent.appendChild(el);
        }
	}
}

module.exports = createEl;