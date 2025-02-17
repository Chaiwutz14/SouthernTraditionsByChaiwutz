document.addEventListener("DOMContentLoaded", function () {
    // เพิ่มเอฟเฟกต์เมื่อโฮเวอร์ปุ่มนำทาง
    const navigationLinks = document.querySelectorAll("nav ul li a");
    navigationLinks.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.transform = "scale(1.1)";
            link.style.boxShadow = "0 0 10px rgba(255, 215, 0, 0.8)";
        });
        link.addEventListener("mouseleave", () => {
            link.style.transform = "scale(1)";
            link.style.boxShadow = "none";
        });
    });

    // เพิ่มเอฟเฟกต์เลื่อนหน้าจอ
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        document.body.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // ปรับการแสดงผลของหัวข้อย่อย (h3) ให้คงที่
    const headingElements = document.querySelectorAll("h3");
    headingElements.forEach(element => {
        element.style.transition = "none"; 
    });

    // ฟังก์ชันการค้นหาประเพณี
    function searchTradition() {
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        console.log("Searching for:", searchTerm);  // เพิ่มเพื่อดูค่าที่กรอกในช่องค้นหา

        const traditionButtons = document.querySelectorAll('.tradition-button');
        console.log("Buttons found:", traditionButtons.length);  // เพิ่มเพื่อดูจำนวนปุ่มที่เจอ

        traditionButtons.forEach(button => {
            const traditionName = button.textContent.toLowerCase();
            if (traditionName.includes(searchTerm)) {
                button.style.display = 'block';
            } else {
                button.style.display = 'none';
            }
        });
    }

    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', searchTradition);  // เรียกฟังก์ชัน searchTradition ทุกครั้งที่พิมพ์
});
