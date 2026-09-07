const switchColor = document.getElementById('colorSwitch');

switchColor.addEventListener('change', () => {
    document.body.classList.toggle('invertido', switchColor.checked);
});

