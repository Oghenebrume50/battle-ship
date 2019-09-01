const divFactory = (className) => {
    const el = document.createElement('div');
    el.classList.add(className);
    return el;
};

export default divFactory;