// Audio feedback
const clickSound = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");

// Function to create ripple effect
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.className = "ripple";

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
    
    // Play click sound
    clickSound.currentTime = 0;
    clickSound.play();
}

// Add click handlers to all nav buttons
document.addEventListener('DOMContentLoaded', () => {
    // ...existing DOMContentLoaded code...

    // Add ripple effect to all buttons
    const buttons = document.querySelectorAll('.nav-btn, .submit-btn');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
});

// Content templates for each section
const sectionContents = {
    balance: `
        <div class="service-card">
            <h2>رصيد المحفظة</h2>
            <svg class="section-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M11.8,10.9c-2.27-0.59-3-1.2-3-2.15c0-1.09,1.01-1.85,2.7-1.85c1.78,0,2.44,0.85,2.5,2.1h2.21 c-0.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94,0.42-3.5,1.68-3.5,3.61c0,2.31,1.91,3.46,4.7,4.13c2.5,0.6,3,1.48,3,2.41 c0,0.69-0.49,1.79-2.7,1.79c-2.06,0-2.87-0.92-2.98-2.1h-2.2c0.12,2.19,1.76,3.42,3.68,3.83V21h3v-2.15 c1.95-0.37,3.5-1.5,3.5-3.55C16.5,12.46,14.07,11.49,11.8,10.9z"/>
            </svg>
            <p class="balance-info">اضغط للاستعلام عن رصيد محفظتك</p>
            <button onclick="checkBalance()" class="submit-btn">استعلام عن الرصيد#</button>
        </div>
    `,
    transfer: `
        <div class="service-card">
            <h2>تحويل أموال</h2>
            <svg class="section-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M14,7L9,2L4,7H8V16H10V7H14M15,17V8H13V17H9L14,22L19,17H15Z"/>
            </svg>
            <form onsubmit="handleTransfer(event)" class="transfer-form">
                <div class="input-group">
                    <label>رقم الهاتف المحول إليه</label>
                    <div class="phone-input-container">
                        <input type="tel" id="phoneNumber" pattern="^01[0125][0-9]{8}$" required maxlength="11" placeholder="ادخل رقم الهاتف">
                        <button type="button" class="contacts-btn" onclick="openContactPicker()">
                            <svg class="button-icon" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="input-group">
                    <label>المبلغ (5-60000 جنيه)</label>
                    <input type="number" id="amount" min="5" max="60000" required placeholder="ادخل المبلغ">
                </div>
                <button type="submit" class="submit-btn">تحويل الأموال</button>
            </form>
        </div>
    `,
    balanceTransfer: `
        <div class="service-card">
            <h2>تحويل رصيد</h2>
            <svg class="section-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z"/>
            </svg>
            <form onsubmit="handleBalanceTransfer(event)" class="transfer-form">
                <div class="input-group">
                    <label>رقم الهاتف المحول إليه</label>
                    <div class="phone-input-container">
                        <input type="tel" id="balancePhoneNumber" pattern="^01[0125][0-9]{8}$" required maxlength="11" placeholder="ادخل رقم الهاتف">
                        <button type="button" class="contacts-btn" onclick="openBalanceContactPicker()">
                            <svg class="button-icon" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="input-group">
                    <label>المبلغ (5-50 جنيه)</label>
                    <input type="number" id="balanceAmount" min="5" max="50" required placeholder="ادخل المبلغ">
                </div>
                <button type="submit" class="submit-btn">تحويل الرصيد</button>
            </form>
        </div>
    `,
    pin: `
        <div class="service-card">
            <h2>الرقم السري</h2>
            <svg class="section-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,17A2,2 0 0,1 14,15C14,13.89 13.1,13 12,13A2,2 0 0,1 10,15A2,2 0 0,1 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/>
            </svg>
            <div class="pin-options">
                <button onclick="createPin()" class="submit-btn pin-btn">إنشاء رقم سري#</button>
                <button onclick="forgotPin()" class="submit-btn pin-btn">نسيت الرقم السري#</button>
                <button onclick="changePin()" class="submit-btn pin-btn">تغيير الرقم السري#</button>
            </div>
        </div>
    `,
    history: `
        <div class="service-card">
            <h2>المعاملات</h2>
            <svg class="section-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3"/>
            </svg>
            <p class="history-info">اضغط لعرض تاريخ معاملاتك</p>
            <button onclick="checkHistory()" class="submit-btn">عرض المعاملات#</button>
        </div>
    `,
    visa: `
        <div class="service-card">
            <h2>فيزا المشتريات</h2>
            <svg class="section-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,1 4,20H20A2,2 0 0,1 22,18V6C22,4.89 21.1,4 20,4Z"/>
            </svg>
            <p class="visa-info">اطلب فيزا المشتريات الخاصة بك</p>
            <button onclick="requestVisa()" class="submit-btn">طلب فيزا#</button>
        </div>
    `,
    support: `
        <div class="service-card">
            <h2>خدمة العملاء</h2>
            <svg class="section-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,1C7,1 3,5 3,10V17A3,3 0 0,0 6,20H9V12H5V10A7,7 0 0,1 12,3A7,7 0 0,1 19,10V12H15V20H18A3,3 0 0,0 21,17V10C21,5 17,1 12,1Z"/>
            </svg>
            <p class="support-info">اتصل بنا للمساعدة</p>
            <button onclick="callSupport()" class="submit-btn">اتصال بخدمة العملاء</button>
        </div>
    `,
    developer: `
        <div class="service-card">
            <h2>مطور التطبيق</h2>
            <svg class="section-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z"/>
            </svg>
            <div class="developer-container">
                <div class="developer-profile">
                    <div class="developer-avatar">
                        <svg class="button-icon" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z"/>
                        </svg>
                    </div>
                    <div class="developer-details">
                        <h3 class="developer-name">م/ عادل عزت</h3>
                        <p class="developer-title">01000072951</p>
                    </div>
                </div>
                <div class="developer-contact">
                    <a href="https://wa.me/201000072951" class="contact-btn whatsapp-btn" target="_blank">
                        <svg class="contact-icon" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"/>
                        </svg>
                        تواصل عبر واتساب
                    </a>
                    <a href="tel:0201000072951" class="contact-btn phone-btn">
                        <svg class="contact-icon" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                        </svg>
                        اتصال هاتفي
                    </a>
                </div>
            </div>
        </div>
    `,
    atm: `
        <div class="service-card">
            <h2>سحب ATM</h2>
            <svg class="section-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z"/>
            </svg>
            <p class="atm-info">اضغط لسحب الأموال من ماكينة الصراف الآلي</p>
            <button onclick="withdrawATM()" class="submit-btn">سحب ATM#</button>
        </div>
    `,
    settings: `
      <div class="service-card settings-card">
        <h2>الإعدادات العامة</h2>
        <svg class="section-icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/>
        </svg>
        
        <div class="settings-section">
          <h3>ترتيب الأقسام</h3>
          <div class="sortable-sections" id="sortableSections">
            <!-- Will be populated dynamically -->
          </div>
        </div>
        
        <div class="settings-section">
          <h3>إظهار/إخفاء الأقسام</h3>
          <div class="section-toggles" id="sectionToggles">
            <!-- Will be populated dynamically -->
          </div>
        </div>
      </div>
    `
};

// Section titles mapping
const sectionTitles = {
    balance: 'رصيد المحفظة',
    transfer: 'تحويل أموال',
    balanceTransfer: 'تحويل رصيد',
    pin: 'الرقم السري',
    history: 'المعاملات',
    visa: 'فيزا المشتريات',
    support: 'خدمة العملاء',
    developer: 'مطور التطبيق',
    atm: 'سحب ATM',
    settings: 'الإعدادات العامة'
};

// Navigation functions
function showBalance() {
    showSection('balance');
}

function showTransfer() {
    showSection('transfer');
}

function showPin() {
    showSection('pin');
}

function showSupport() {
    showSection('support');
}

function showHistory() {
    showSection('history');
}

function showVisa() {
    showSection('visa');
}

function showBalanceTransfer() {
    showSection('balanceTransfer');
}

function showAtm() {
    showSection('atm');
}

function showDeveloper() {
    showSection('developer');
}

function showSettings() {
  showSection('settings');
  initializeSectionSettings();
}

function showSection(section) {
    const contents = sectionContents[section];
    if (contents) {
        // Create modal elements
        const modal = document.createElement('div');
        modal.className = 'section-modal';
        
        const modalContainer = document.createElement('div');
        modalContainer.className = 'modal-container';
        
        const closeButton = document.createElement('button');
        closeButton.className = 'modal-close';
        closeButton.innerHTML = `
            <svg class="close-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
            </svg>
        `;
        
        closeButton.onclick = () => {
            modal.style.opacity = '0';
            setTimeout(() => modal.remove(), 300);
        };

        // Add close button label
        const closeLabel = document.createElement('span');
        closeLabel.className = 'close-button-label';
        closeLabel.textContent = 'إغلاق';
        
        modalContainer.innerHTML = contents;
        modalContainer.insertBefore(closeLabel, modalContainer.firstChild);
        modalContainer.insertBefore(closeButton, modalContainer.firstChild);
        
        modal.appendChild(modalContainer);
        document.body.appendChild(modal);
        
        // Show modal with animation
        requestAnimationFrame(() => {
            modal.style.display = 'block';
            // Add ripple effect to new modal buttons
            const modalButtons = modal.querySelectorAll('.submit-btn');
            modalButtons.forEach(button => {
                button.addEventListener('click', createRipple);
            });
        });
        
        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.opacity = '0';
                setTimeout(() => modal.remove(), 300);
            }
        });
    }
}

// Add keyboard support for closing modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.querySelector('.section-modal');
        if (modal) modal.remove();
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Check saved theme color
    const savedColor = localStorage.getItem('themeColor');
    if (savedColor) {
        document.documentElement.style.setProperty('--primary-color', savedColor);
        document.getElementById('themeColor').value = savedColor;
    }
    
    // Check dark mode
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        updateDarkModeButton();
    }
    
    // Show welcome message with Vodafone Cash logo
    document.getElementById('otherSections').innerHTML = `
        <div class="welcome-message">
            <div class="vodafone-logo">
                <svg class="logo-icon" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="#e60000"/>
                    <path fill="#fff" d="M50,20c-16.57,0-30,13.43-30,30s13.43,30,30,30s30-13.43,30-30S66.57,20,50,20z M65.82,58.55 c-0.64,1.45-1.56,2.71-2.77,3.77c-1.21,1.06-2.68,1.88-4.41,2.46c-1.73,0.58-3.66,0.87-5.79,0.87c-2.13,0-4.06-0.29-5.79-0.87 c-1.73-0.58-3.2-1.4-4.41-2.46c-1.21-1.06-2.14-2.32-2.77-3.77c-0.64-1.45-0.96-3.04-0.96-4.77c0-1.73,0.32-3.32,0.96-4.77 c0.64-1.45,1.56-2.71,2.77-3.77c1.21-1.06,2.68-1.88,4.41-2.46c1.73-0.58,3.66-0.87,5.79-0.87c2.13,0,4.06,0.29,5.79,0.87 c1.73,0.58,3.2,1.4,4.41,2.46c1.21,1.06,2.14,2.32,2.77,3.77c0.64,1.45,0.96,3.04,0.96,4.77C66.77,55.51,66.45,57.1,65.82,58.55z"/>
                    <text x="50" y="55" font-size="8" fill="#fff" text-anchor="middle" font-weight="bold">CASH</text>
                </svg>
            </div>
            <div class="vodafone-cash-text">
                <svg class="service-text" viewBox="0 0 200 40">
                    <text x="100" y="25" font-size="18" fill="var(--primary-color)" text-anchor="middle" font-weight="bold">خدمات فودافون كاش</text>
                </svg>
            </div>
            <h2>مرحباً بك في خدمات فودافون كاش</h2>
            <p>اختر الخدمة التي تريدها من القائمة أعلاه</p>
        </div>
    `;
    
    // Initialize section order and visibility
    const sectionOrder = JSON.parse(localStorage.getItem('sectionOrder')) || defaultSectionOrder();
    const hiddenSections = JSON.parse(localStorage.getItem('hiddenSections')) || [];
    updateNavigation(sectionOrder, hiddenSections);
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateDarkModeButton();
}

function updateDarkModeButton() {
  const isDarkMode = document.body.classList.contains('dark-mode');
  const toggleBtn = document.getElementById('darkModeToggle');
  
  if (isDarkMode) {
    toggleBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,23A11,11,0,1,1,23,12,11,11,0,0,1,12,23Z M12,21A9,9,0,1,0,3,12,9,9,0,0,0,12,21M12,3A3,3,0,0,0,9,6V8H15V6A3,3,0,0,0,12,3M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14M12,3A3,3,0,0,0,9,6V8H15V6A3,3,0,0,0,12,3Z"/>
      </svg>
    `;
  } else {
    toggleBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18A8,8,0,1,1,20,12,8,8,0,0,1,13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9,0,0,0 22,12A9,9,0,0,0,13,3"/>
    </svg>
  `;
  }
}

function updateThemeColor(color) {
  document.documentElement.style.setProperty('--primary-color', color);
  localStorage.setItem('themeColor', color);
  
  // Update RGB values
  const r = parseInt(color.substr(1,2), 16);
  const g = parseInt(color.substr(3,2), 16);
  const b = parseInt(color.substr(5,2), 16);
  document.documentElement.style.setProperty('--primary-color-rgb', `${r}, ${g}, ${b}`);
  
  // Update gradients
  const darkerColor = adjustColor(color, -20);
  document.documentElement.style.setProperty('--button-gradient', 
    `linear-gradient(145deg, ${color}, ${darkerColor})`);
}

// Helper function to adjust color brightness
function adjustColor(color, amount) {
  return '#' + color.replace(/^#/, '').replace(/../g, color => 
    ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

function defaultSectionOrder() {
  return [
    'balance',
    'transfer', 
    'balanceTransfer',
    'atm',
    'pin',
    'history',
    'visa',
    'support',
    'developer',
    'settings'
  ];
}

function updateNavigation(sectionOrder, hiddenSections) {
  const nav = document.querySelector('.service-nav');
  if (!nav) return;
  
  nav.innerHTML = '';
  
  sectionOrder
    .filter(section => !hiddenSections.includes(section))
    .forEach(section => {
      const button = document.createElement('button');
      button.className = 'nav-btn';
      button.onclick = () => window[`show${section.charAt(0).toUpperCase() + section.slice(1)}`]();
      
      button.innerHTML = `
        <svg class="button-icon" viewBox="0 0 24 24">
          ${getSectionIcon(section)}
        </svg>
        ${sectionTitles[section]}
      `;
      
      nav.appendChild(button);
    });
}

function initializeSectionSettings() {
  // Load saved section order and visibility
  let sectionOrder = JSON.parse(localStorage.getItem('sectionOrder')) || defaultSectionOrder();
  let hiddenSections = JSON.parse(localStorage.getItem('hiddenSections')) || [];
  
  const sortableContainer = document.getElementById('sortableSections');
  if (!sortableContainer) return;
  
  sortableContainer.innerHTML = '';
  
  // Populate sortable sections with arrows
  sectionOrder.forEach((section, index) => {
    const item = document.createElement('div');
    item.className = 'sortable-item';
    item.dataset.section = section;
    
    item.innerHTML = `
      <div class="section-title">${sectionTitles[section]}</div>
      <div class="reorder-buttons">
        <button class="arrow-btn up-btn" ${index === 0 ? 'disabled' : ''} 
          onclick="moveSection('${section}', 'up')">
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"/>
          </svg>
        </button>
        <button class="arrow-btn down-btn" ${index === sectionOrder.length - 1 ? 'disabled' : ''} 
          onclick="moveSection('${section}', 'down')">
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M7.41,8.59L12,13.17L16.59,8.59L18,10L12,16L6,10L7.41,8.59Z"/>
          </svg>
        </button>
      </div>
    `;
    
    sortableContainer.appendChild(item);
  });

  // Populate section toggles
  const togglesContainer = document.getElementById('sectionToggles');
  if (!togglesContainer) return;
  
  togglesContainer.innerHTML = sectionOrder.map(section => `
    <label class="toggle-switch">
      <span class="toggle-label">${sectionTitles[section]}</span>
      <input type="checkbox" data-section="${section}" 
        ${!hiddenSections.includes(section) ? 'checked' : ''} 
        onchange="handleSectionToggle(event)">
      <span class="toggle-slider"></span>  
    </label>
  `).join('');
}

function moveSection(sectionId, direction) {
  console.log(`Moving section ${sectionId} ${direction}`); // Debug log
  
  let sectionOrder = JSON.parse(localStorage.getItem('sectionOrder')) || defaultSectionOrder();
  const currentIndex = sectionOrder.indexOf(sectionId);
  
  if (direction === 'up' && currentIndex > 0) {
    // Swap with previous element
    [sectionOrder[currentIndex], sectionOrder[currentIndex - 1]] = 
    [sectionOrder[currentIndex - 1], sectionOrder[currentIndex]];
  } else if (direction === 'down' && currentIndex < sectionOrder.length - 1) {
    // Swap with next element
    [sectionOrder[currentIndex], sectionOrder[currentIndex + 1]] = 
    [sectionOrder[currentIndex + 1], sectionOrder[currentIndex]];
  }

  // Save new order
  localStorage.setItem('sectionOrder', JSON.stringify(sectionOrder));
  console.log('New section order:', sectionOrder); // Debug log
  
  // Update both the settings view and main navigation
  const hiddenSections = JSON.parse(localStorage.getItem('hiddenSections')) || [];
  updateNavigation(sectionOrder, hiddenSections);
  
  // Re-initialize settings to update the arrows and order
  initializeSectionSettings();
  
  // Create ripple effect on the clicked button
  const button = event.currentTarget;
  createRipple({ currentTarget: button });
}

// Update the handling of section visibility
function handleSectionToggle(event) {
  const section = event.target.dataset.section;
  let hiddenSections = JSON.parse(localStorage.getItem('hiddenSections')) || [];
  
  if (event.target.checked) {
    // Show section
    hiddenSections = hiddenSections.filter(s => s !== section);
  } else {
    // Hide section
    if (!hiddenSections.includes(section)) {
      hiddenSections.push(section);
    }
  }
  
  localStorage.setItem('hiddenSections', JSON.stringify(hiddenSections));
  
  // Update navigation with current section order
  const sectionOrder = JSON.parse(localStorage.getItem('sectionOrder')) || defaultSectionOrder();
  updateNavigation(sectionOrder, hiddenSections);
  
  // Create ripple effect on the toggle switch
  createRipple({ currentTarget: event.target.closest('.toggle-switch') });
}

// Add this function to reset section order if needed
function resetSectionOrder() {
  localStorage.setItem('sectionOrder', JSON.stringify(defaultSectionOrder()));
  localStorage.setItem('hiddenSections', JSON.stringify([]));
  location.reload();
}

// Update navigation function to properly handle the reordering
function updateNavigation(sectionOrder, hiddenSections) {
  const nav = document.querySelector('.service-nav');
  if (!nav) return;
  
  nav.innerHTML = '';
  
  sectionOrder
    .filter(section => !hiddenSections.includes(section))
    .forEach(section => {
      const button = document.createElement('button');
      button.className = 'nav-btn';
      button.onclick = () => window[`show${section.charAt(0).toUpperCase() + section.slice(1)}`]();
      
      button.innerHTML = `
        <svg class="button-icon" viewBox="0 0 24 24">
          ${getSectionIcon(section)}
        </svg>
        ${sectionTitles[section]}
      `;
      
      nav.appendChild(button);
    });
}

// Make sure to initialize settings and navigation when page loads
document.addEventListener('DOMContentLoaded', () => {
  // Initialize section order if it doesn't exist
  if (!localStorage.getItem('sectionOrder')) {
    localStorage.setItem('sectionOrder', JSON.stringify(defaultSectionOrder()));
  }
  
  // Initialize hidden sections if it doesn't exist
  if (!localStorage.getItem('hiddenSections')) {
    localStorage.setItem('hiddenSections', JSON.stringify([]));
  }
  
  const sectionOrder = JSON.parse(localStorage.getItem('sectionOrder'));
  const hiddenSections = JSON.parse(localStorage.getItem('hiddenSections'));
  
  updateNavigation(sectionOrder, hiddenSections);
});

function checkBalance() {
    window.location.href = 'tel:*9*13#';
}

function createPin() {
    window.location.href = 'tel:*9*5#';
}

function forgotPin() {
    window.location.href = 'tel:*9*12#';
}

function changePin() {
    window.location.href = 'tel:*9*2#';
}

function checkHistory() {
    window.location.href = 'tel:*9*500#';
}

function requestVisa() {
    window.location.href = 'tel:*9*100#';
}

function callSupport() {
    // No # needed for customer service
    window.location.href = 'tel:7001';
}

function handleTransfer(event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phoneNumber').value;
    const amount = document.getElementById('amount').value;
    
    if (!isValidPhoneNumber(phoneNumber)) {
        alert('من فضلك ادخل رقم هاتف صحيح');
        return;
    }
    
    if (amount < 5 || amount > 60000) {
        alert('المبلغ يجب أن يكون بين 5 و 60000 جنيه');
        return;
    }
    
    window.location.href = `tel:*9*7*${phoneNumber}*${amount}#`;
}

function handleBalanceTransfer(event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('balancePhoneNumber').value;
    const amount = document.getElementById('balanceAmount').value;
    
    if (!isValidPhoneNumber(phoneNumber)) {
        alert('من فضلك ادخل رقم هاتف صحيح');
        return;
    }
    
    if (amount < 5 || amount > 50) {
        alert('المبلغ يجب أن يكون بين 5 و 50 جنيه');
        return;
    }
    
    window.location.href = `tel:*868*2*${phoneNumber}*${amount}#`;
}

function withdrawATM() {
    window.location.href = 'tel:*9*22#';  
}

function isValidPhoneNumber(phone) {
    return /^01[0125][0-9]{8}$/.test(phone);
}

function getSectionIcon(section) {
  const icons = {
    balance: '<path fill="currentColor" d="M11.8,10.9c-2.27-0.59-3-1.2-3-2.15c0-1.09,1.01-1.85,2.7-1.85c1.78,0,2.44,0.85,2.5,2.1h2.21 c-0.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94,0.42-3.5,1.68-3.5,3.61c0,2.31,1.91,3.46,4.7,4.13c2.5,0.6,3,1.48,3,2.41 c0,0.69-0.49,1.79-2.7,1.79c-2.06,0-2.87-0.92-2.98-2.1h-2.2c0.12,2.19,1.76,3.42,3.68,3.83V21h3v-2.15 c1.95-0.37,3.5-1.5,3.5-3.55C16.5,12.46,14.07,11.49,11.8,10.9z"/>',
    transfer: '<path fill="currentColor" d="M14,7L9,2L4,7H8V16H10V7H14M15,17V8H13V17H9L14,22L19,17H15Z"/>',
    balanceTransfer: '<path fill="currentColor" d="M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z"/>',
    pin: '<path fill="currentColor" d="M12,17A2,2 0 0,1 14,15C14,13.89 13.1,13 12,13A2,2 0 0,1 10,15A2,2 0 0,1 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/>',
    history: '<path fill="currentColor" d="M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3"/>',
    visa: '<path fill="currentColor" d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,1 4,20H20A2,2 0 0,1 22,18V6C22,4.89 21.1,4 20,4Z"/>',
    support: '<path fill="currentColor" d="M12,1C7,1 3,5 3,10V17A3,3 0 0,0 6,20H9V12H5V10A7,7 0 0,1 12,3A7,7 0 0,1 19,10V12H15V20H18A3,3 0 0,0 21,17V10C21,5 17,1 12,1Z"/>',
    developer: '<path fill="currentColor" d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z"/>',
    atm: '<path fill="currentColor" d="M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z"/>',
    settings: '<path fill="currentColor" d="M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>'
  };
  return icons[section] || '';
}