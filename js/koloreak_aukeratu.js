const selectTheme = document.querySelector('#select-theme');
const selectSecondaryDiff = document.querySelector('#select-secondary-diff');
const root = document.querySelector(':root');

selectTheme.addEventListener('change', function() {
    root.setAttribute('data-theme', this.value);
});

selectSecondaryDiff.addEventListener('input', function() {
    root.setAttribute('data-secondary-diff', this.value);
    document.querySelector('#secondary-diff-value').textContent = String(this.value).padStart(3, '0');
});