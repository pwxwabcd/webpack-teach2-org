function component() {
    let element = document.createElement('div');

    //调用Lodash的join方法
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    //加入image
    var myAddIcon = new Image();
    myAddIcon.src = './add.png';
    element.appendChild(myAddIcon);

    var myDeleteIcon = new Image();
    myDeleteIcon.src = './delete.png';
    element.appendChild(myDeleteIcon);

    return element;
}

document.body.appendChild(component());