const lightBackgroundColors = [
    "#F0F8FF", "#F5F5DC", "#FFFAF0", "#F0FFF0", "#FAEBD7",
    "#D3D3D3", "#FFE4B5", "#FFDAB9", "#E6E6FA", "#FFF0F5",
    "#F5FFFA", "#F0F0F0", "#E0FFFF", "#F8F8FF", "#DCDCDC",
    "#FFF5EE", "#F0E68C", "#B0E0E6", "#FFDEAD", "#D8BFD8"
  ];

  document.getElementById('bg-color').addEventListener('click', function() {
    document.body.style.backgroundColor = lightBackgroundColors[Math.floor(Math.random() * lightBackgroundColors.length)];
  });