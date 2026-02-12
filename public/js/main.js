document.addEventListener('DOMContentLoaded', () => {
    // --- كود القائمة الجانبية (بدون تغيير) ---
    const menuBtn = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.close-btn');

    function toggleMenu() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', toggleMenu);
    if (closeBtn) closeBtn.addEventListener('click', toggleMenu);

    // --- إضافة لضمان تشغيل الفيديو تلقائياً في الخلفية ---
    const heroVideo = document.querySelector('.hero video');
    if (heroVideo) {
        heroVideo.play().catch(error => {
            console.log("التشغيل التلقائي واجه قيوداً من المتصفح، لكن الفيديو جاهز.");
        });
    }
});
