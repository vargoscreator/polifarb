document.getElementById('file').addEventListener('change', function () {
    const fileStatus = document.querySelector('.file-status');
    const defaultText = fileStatus.getAttribute('data-status');
    if (this.files.length > 0) {
        let fileName = this.files[0].name;
        const maxLength = 20;
        if (fileName.length > maxLength) {
            const start = fileName.substring(0, 10);
            const end = fileName.substring(fileName.length - 7);
            fileName = `${start}...${end}`;
        }
        fileStatus.textContent = fileName;
    } else {
        fileStatus.textContent = defaultText;
    }
});
