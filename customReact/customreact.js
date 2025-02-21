function CustomRender(createReactElement, mainContainer){
   /* const domElement = document.createElement(createReactElement.type)
    domElement.innerHTML = createReactElement.children
    domElement.setAttribute('href', createReactElement.props.href)
    domElement.setAttribute('target',createReactElement.props.target)
    mainContainer.appendChild(domElement)*/

    const domElement = document.createElement(createReactElement.type)
    domElement.innerHTML = createReactElement.children
    for(const prop in createReactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, createReactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}

const mainContainer = document.querySelector('#root')

const createReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

CustomRender(createReactElement, mainContainer)