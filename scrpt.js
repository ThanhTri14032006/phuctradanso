// Dữ liệu mẫu (sẽ chuyển sang backend trong tương lai)
const accounts = [
    { username: "admin", password: "123456" },
    { username: "user1", password: "123456" },
    { username: "user2", password: "123456" }
];

let households = [
    {
        id: 1,
        head_name: "Nguyễn Văn A",
        cccd: "012345678901",
        phone: "0987654321",
        ward: "Ấp 1",
        address: "123 đường 123",
        sync_time: "22:23 18/02/2025",
        residence_type: "1",
        registered_at: "Hà Nội",
        gender: "nam",
        birthdate: "1970-01-01",
        ethnicity: "kinh",
        occupation: "Giáo viên"
    }
];

let householdMembers = [
    {
        id: 1,
        household_id: 1,
        name: "Nguyễn Văn A",
        cccd: "012345678901",
        role: "Chủ hộ",
        relationship: "Chủ hộ",
        gender: "nam",
        birthdate: "1970-01-01",
        ethnicity: "kinh",
        occupation: "Giáo viên",
        residence_time: "20 năm",
        permanent_address: "Hà Nội",
        current_address: "Hà Nội",
        phone: "0987654321",
        residence_status: "1"
    },
    {
        id: 2,
        household_id: 1,
        name: "Trần Thị B",
        cccd: "012345678902",
        role: "Thành viên",
        relationship: "Vợ",
        gender: "nu",
        birthdate: "1975-02-02",
        ethnicity: "kinh",
        occupation: "Nội trợ",
        residence_time: "20 năm",
        permanent_address: "Hà Nội",
        current_address: "Hà Nội",
        phone: "0987654322",
        residence_status: "1"
    }
];

const translations = {
    vi: {
        title: "Quản Lý Dữ Liệu Nhân Khẩu",
        login: "Đăng nhập",
        logout: "Đăng xuất",
        empty_error: "Không được để trống",
        login_error: "Không thể đăng nhập",
        login_error_msg: "Thông tin đăng nhập không chính xác. Vui lòng kiểm tra lại tài khoản và mật khẩu",
        close: "Đóng",
        username: "Tài khoản",
        password: "Mật khẩu",
        household_list: "Danh Sách Hộ Nhân Khẩu",
        head_name: "Tên chủ hộ",
        cccd: "CCCD",
        phone: "SĐT",
        ward: "Ấp",
        address: "Địa chỉ",
        sync_time: "Đồng bộ lúc",
        actions: "Hành động",
        enter_head_name: "Nhập tên chủ hộ",
        enter_cccd: "Nhập CCCD",
        enter_phone: "Nhập SĐT",
        select_ward: "Chọn ấp",
        enter_address: "Nhập địa chỉ",
        clear_filter: "Xóa lọc",
        search: "Tìm",
        export_excel: "Xuất Excel",
        add_new: "Thêm mới",
        list: "Danh sách",
        household_prefix: "HỘ: ",
        no: "STT",
        member: "Thành viên",
        role: "Vai trò",
        relationship: "Quan hệ với chủ hộ",
        add_household: "Thêm mới hộ nhân khẩu",
        residence_type: "Loại cư trú",
        select_residence_type: "Chọn loại cư trú",
        permanent: "Thường trú",
        temporary: "Tạm trú",
        registered_at: "Đăng ký tại",
        add_member: "Thêm thành viên",
        edit_member: "Sửa thành viên",
        name: "Họ và tên",
        name_error: "Tên chỉ chứa chữ cái và khoảng trắng",
        select_relationship: "Chọn quan hệ",
        chuho: "Chủ hộ",
        vo: "Vợ",
        chong: "Chồng",
        con: "Con",
        chau: "Cháu",
        ongba: "Ông/Bà",
        cha: "Cha",
        me: "Mẹ",
        anh: "Anh",
        chi: "Chị",
        em: "Em",
        khac: "Khác",
        gender: "Giới tính",
        select_gender: "Chọn giới tính",
        male: "Nam",
        female: "Nữ",
        birthdate: "Ngày sinh",
        birthdate_error: "Ngày sinh không hợp lệ",
        cccd_error: "CCCD đã tồn tại hoặc không hợp lệ",
        ethnicity: "Dân tộc",
        select_ethnicity: "Chọn dân tộc",
        kinh: "Kinh",
        occupation: "Nghề nghiệp",
        residence_time: "Thời gian cư trú",
        permanent_address: "Hộ khẩu thường trú",
        current_address: "Nơi ở hiện tại",
        phone_error: "Số điện thoại không hợp lệ",
        residence_status: "Trạng thái cư trú",
        select_status: "Chọn trạng thái",
        residing: "Đang cư trú",
        moved: "Đã chuyển đi",
        temporarily_absent: "Tạm vắng",
        cancel: "Hủy",
        add: "Thêm",
        save: "Lưu",
        edit: "Sửa",
        delete: "Xóa",
        confirm_delete: "Xác nhận xóa thành viên",
        delete_confirm_msg: "Thành viên sẽ bị xóa khỏi hộ cư trú",
        confirm_logout: "Bạn có chắc muốn đăng xuất?",
        error: "Có lỗi xảy ra",
        error_msg: "Vui lòng thử lại sau",
        retry: "Thử lại",
        details: "Chi tiết",
        no_data: "Không có dữ liệu để xuất",
        export_failed: "Lỗi khi xuất Excel",
        loading: "Đang tải...",
        results_count: "Kết quả"
    },
    en: {
        title: "Population Data Management",
        login: "Login",
        logout: "Logout",
        empty_error: "Cannot be empty",
        login_error: "Cannot login",
        login_error_msg: "Incorrect login information. Please check your username and password",
        close: "Close",
        username: "Username",
        password: "Password",
        household_list: "Household List",
        head_name: "Head Name",
        cccd: "ID Number",
        phone: "Phone",
        ward: "Ward",
        address: "Address",
        sync_time: "Synced At",
        actions: "Actions",
        enter_head_name: "Enter head name",
        enter_cccd: "Enter ID number",
        enter_phone: "Enter phone",
        select_ward: "Select ward",
        enter_address: "Enter address",
        clear_filter: "Clear Filter",
        search: "Search",
        export_excel: "Export Excel",
        add_new: "Add New",
        list: "List",
        household_prefix: "HOUSEHOLD: ",
        no: "No.",
        member: "Member",
        role: "Role",
        relationship: "Relationship with Head",
        add_household: "Add New Household",
        residence_type: "Residence Type",
        select_residence_type: "Select residence type",
        permanent: "Permanent",
        temporary: "Temporary",
        registered_at: "Registered At",
        add_member: "Add Member",
        edit_member: "Edit Member",
        name: "Full Name",
        name_error: "Name must contain only letters and spaces",
        select_relationship: "Select relationship",
        chuho: "Head of Household",
        vo: "Wife",
        chong: "Husband",
        con: "Child",
        chau: "Grandchild",
        ongba: "Grandparent",
        cha: "Father",
        me: "Mother",
        anh: "Brother",
        chi: "Sister",
        em: "Younger Sibling",
        khac: "Other",
        gender: "Gender",
        select_gender: "Select gender",
        male: "Male",
        female: "Female",
        birthdate: "Date of Birth",
        birthdate_error: "Invalid date of birth",
        cccd_error: "ID Number already exists or invalid",
        ethnicity: "Ethnicity",
        select_ethnicity: "Select ethnicity",
        kinh: "Kinh",
        occupation: "Occupation",
        residence_time: "Residence Duration",
        permanent_address: "Permanent Address",
        current_address: "Current Address",
        phone_error: "Invalid phone number",
        residence_status: "Residence Status",
        select_status: "Select status",
        residing: "Residing",
        moved: "Moved",
        temporarily_absent: "Temporarily Absent",
        cancel: "Cancel",
        add: "Add",
        save: "Save",
        edit: "Edit",
        delete: "Delete",
        confirm_delete: "Confirm Member Deletion",
        delete_confirm_msg: "The member will be removed from the household",
        confirm_logout: "Are you sure you want to logout?",
        error: "An Error Occurred",
        error_msg: "Please try again later",
        retry: "Retry",
        details: "Details",
        no_data: "No data to export",
        export_failed: "Failed to export Excel",
        loading: "Loading...",
        results_count: "Results"
    }
};

/**
 * Thoát ký tự HTML để ngăn XSS
 * @param {string} str - Chuỗi cần thoát
 * @returns {string} Chuỗi đã thoát
 */
function escapeHTML(str) {
    return str.replace(/[&<>"']/g, match => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    }[match]));
}

/**
 * Hiển thị spinner loading
 */
function showLoading() {
    let spinner = document.getElementById('loadingSpinner');
    if (!spinner) {
        spinner = document.createElement('div');
        spinner.id = 'loadingSpinner';
        spinner.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 15px 30px;
            border-radius: 8px;
            z-index: 1000;
        `;
        document.body.appendChild(spinner);
    }
    spinner.textContent = translations[lang].loading;
}

/**
 * Ẩn spinner loading
 */
function hideLoading() {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) spinner.remove();
}

/**
 * Hiển thị modal lỗi với thông báo chi tiết
 * @param {string} message - Thông báo lỗi
 * @param {string} errorCode - Mã lỗi
 */
function showErrorModal(message, errorCode) {
    const modal = document.getElementById('errorModal');
    const errorMessage = modal.querySelector('p');
    errorMessage.textContent = `${message} (Error Code: ${errorCode})`;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    console.error(`Error: ${message} (Code: ${errorCode})`);
}

/**
 * Đóng modal lỗi
 */
function closeErrorModal() {
    document.getElementById('errorModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

/**
 * Debounce hàm
 * @param {Function} func - Hàm cần debounce
 * @param {number} wait - Thời gian chờ (ms)
 * @returns {Function} Hàm đã debounce
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Quản lý ngôn ngữ
let lang = 'vi';

function updateLanguage() {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[lang][key] || element.textContent;
    });
    document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
        const key = element.getAttribute('data-lang-placeholder');
        element.placeholder = translations[lang][key] || element.placeholder;
    });
    const modalTitle = document.getElementById('modalTitle');
    if (modalTitle) {
        modalTitle.textContent = translations[lang][modalTitle.getAttribute('data-lang')];
    }
    const submitMemberBtn = document.getElementById('submitMemberBtn');
    if (submitMemberBtn) {
        submitMemberBtn.textContent = translations[lang][submitMemberBtn.getAttribute('data-lang')];
    }
}

function changeLanguage(newLang) {
    lang = newLang;
    updateLanguage();
    displayHouseholds();
    if (document.getElementById('householdDetailSection').classList.contains('active')) {
        displayMembers();
    }
}

// Quản lý đăng nhập
function handleLogin(e) {
    e.preventDefault();
    showLoading();
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const isUsernameValid = validateInput(username);
    const isPasswordValid = validateInput(password);
    if (isUsernameValid && isPasswordValid) {
        setTimeout(() => { // Giả lập gọi API
            if (accounts.some(acc => acc.username === username.value && acc.password === password.value)) {
                localStorage.setItem('isLoggedIn', 'true');
                showSection('householdListSection');
            } else {
                showErrorPopup();
            }
            hideLoading();
        }, 500);
    } else {
        hideLoading();
    }
}

/**
 * Kiểm tra đầu vào không rỗng
 * @param {HTMLElement} input - Phần tử input
 * @returns {boolean} Hợp lệ hay không
 */
function validateInput(input) {
    const errorText = input.nextElementSibling;
    if (!input.value.trim()) {
        errorText.style.display = 'block';
        return false;
    }
    errorText.style.display = 'none';
    return true;
}

function showErrorPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('errorPopup').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeErrorPopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('errorPopup').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function logout() {
    if (confirm(translations[lang].confirm_logout)) {
        localStorage.removeItem('isLoggedIn');
        showSection('loginSection');
    }
}

// Quản lý section
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    const section = document.getElementById(sectionId);
    section.classList.add('active');
    if (sectionId === 'householdListSection') {
        displayHouseholds();
    } else if (sectionId === 'householdDetailSection') {
        displayMembers();
    }
}

// Quản lý danh sách hộ
let currentPage = 1;
let itemsPerPage = 20;

function displayHouseholds(page = currentPage) {
    showLoading();
    const tbody = document.getElementById('householdTableBody');
    tbody.innerHTML = '';
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedHouseholds = households.slice(start, end);
    paginatedHouseholds.forEach(household => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="checkbox"></td>
            <td>${escapeHTML(household.head_name)}</td>
            <td>${escapeHTML(household.cccd)}</td>
            <td>${escapeHTML(household.phone)}</td>
            <td>${escapeHTML(household.ward)}</td>
            <td>${escapeHTML(household.address)}</td>
            <td>${escapeHTML(household.sync_time)}</td>
            <td><a class="action-btn" onclick="viewHouseholdDetails(${household.id})">${translations[lang].details}</a></td>
        `;
        tbody.appendChild(row);
    });
    updatePagination(page);
    hideLoading();
}

/**
 * Cập nhật phân trang
 * @param {number} currentPage - Trang hiện tại
 */
function updatePagination(currentPage) {
    const pageInfo = document.getElementById('pageInfo');
    const pageNumbers = document.getElementById('pageNumbers');
    const totalPages = Math.ceil(households.length / itemsPerPage);
    pageInfo.textContent = `${translations[lang].results_count}: ${households.length}`;
    pageNumbers.innerHTML = `
        <select onchange="changeItemsPerPage(this.value)">
            <option value="20" ${itemsPerPage === 20 ? 'selected' : ''}>20</option>
            <option value="50" ${itemsPerPage === 50 ? 'selected' : ''}>50</option>
            <option value="100" ${itemsPerPage === 100 ? 'selected' : ''}>100</option>
        </select>
    `;
    const maxPagesToShow = 5;
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    for (let i = startPage; i <= endPage; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.className = i === currentPage ? 'active' : '';
        btn.onclick = () => {
            currentPage = i;
            displayHouseholds(i);
        };
        pageNumbers.appendChild(btn);
    }
}

function changeItemsPerPage(value) {
    itemsPerPage = parseInt(value);
    currentPage = 1;
    displayHouseholds();
}

function searchHouseholds() {
    showLoading();
    const formData = new FormData(document.getElementById('searchForm'));
    const filters = Object.fromEntries(formData);
    const filteredHouseholds = households.filter(h => {
        return (!filters.head_name || h.head_name.toLowerCase().includes(filters.head_name.toLowerCase())) &&
               (!filters.cccd || h.cccd.includes(filters.cccd)) &&
               (!filters.phone || h.phone.includes(filters.phone)) &&
               (!filters.ward || h.ward === filters.ward) &&
               (!filters.address || h.address.toLowerCase().includes(filters.address.toLowerCase()));
    });
    households = filteredHouseholds;
    currentPage = 1;
    displayHouseholds(1);
    hideLoading();
}

function clearSearch() {
    document.getElementById('searchForm').reset();
    households = [...households]; // TODO: Load from server
    currentPage = 1;
    displayHouseholds(1);
}

function exportHouseholdsToExcel() {
    showLoading();
    try {
        if (!households.length) {
            showErrorModal(translations[lang].no_data, 'EMPTY_DATA');
            hideLoading();
            return;
        }
        const data = households.map(h => ({
            [translations[lang].head_name]: h.head_name,
            [translations[lang].cccd]: h.cccd,
            [translations[lang].phone]: h.phone,
            [translations[lang].ward]: h.ward,
            [translations[lang].address]: h.address,
            [translations[lang].sync_time]: h.sync_time
        }));
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Households");
        XLSX.write(wb, "households.xlsx");
        hideLoading();
    } catch (error) {
        showErrorModal(translations[lang].export_failed, 'EXPORT_FAILED');
        hideLoading();
    }
}

function showAddHouseholdModal() {
    const form = document.getElementById('householdForm');
    form.reset();
    document.getElementById('householdId').value = '';
    document.getElementById('addHouseholdModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeAddHouseholdModal() {
    document.getElementById('addHouseholdModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

/**
 * Xử lý submit form hộ
 * @param {Event} e - Sự kiện submit
 */
function handleHouseholdSubmit(e) {
    e.preventDefault();
    showLoading();
    const formData = new FormData(e.target);
    const householdId = document.getElementById('householdId').value;
    const cccd = formData.get('cccd');
    const birthdate = formData.get('birthdate');
    const today = new Date('2025-04-30');
    const cccdRegex = /^\d{12}$/;
    const cccdExists = households.some(h => h.cccd === cccd && (!householdId || h.id !== parseInt(householdId)));
    if (!cccdRegex.test(cccd) || cccdExists) {
        showErrorModal(translations[lang].cccd_error, 'CCCD_INVALID_OR_EXISTS');
        hideLoading();
        return;
    }
    if (!birthdate || new Date(birthdate) > today) {
        showErrorModal(translations[lang].birthdate_error, 'INVALID_BIRTHDATE');
        hideLoading();
        return;
    }
    const phone = formData.get('phone');
    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(phone)) {
        showErrorModal(translations[lang].phone_error, 'INVALID_PHONE');
        hideLoading();
        return;
    }
    const householdData = {
        id: householdId ? parseInt(householdId) : households.length ? Math.max(...households.map(h => h.id)) + 1 : 1,
        residence_type: formData.get('residence_type'),
        registered_at: formData.get('registered_at'),
        ward: formData.get('ward'),
        head_name: formData.get('head_name'),
        gender: formData.get('gender'),
        birthdate: formData.get('birthdate'),
        cccd: cccd,
        ethnicity: formData.get('ethnicity'),
        occupation: formData.get('occupation'),
        phone: phone,
        address: formData.get('address'),
        sync_time: new Date().toLocaleString('vi-VN')
    };
    if (householdId) {
        const index = households.findIndex(h => h.id === parseInt(householdId));
        households[index] = householdData;
    } else {
        households.push(householdData);
        if (!householdMembers.some(m => m.cccd === cccd)) {
            householdMembers.push({
                id: householdMembers.length ? Math.max(...householdMembers.map(m => m.id)) + 1 : 1,
                household_id: householdData.id,
                name: householdData.head_name,
                cccd: cccd,
                role: "Chủ hộ",
                relationship: "Chủ hộ",
                gender: householdData.gender,
                birthdate: householdData.birthdate,
                ethnicity: householdData.ethnicity,
                occupation: householdData.occupation,
                residence_time: "N/A",
                permanent_address: householdData.address,
                current_address: householdData.address,
                phone: householdData.phone,
                residence_status: "1"
            });
        }
    }
    displayHouseholds();
    closeAddHouseholdModal();
    hideLoading();
}

// Quản lý chi tiết hộ
let currentHouseholdId;
let memberToDelete;

function viewHouseholdDetails(id) {
    currentHouseholdId = id;
    const household = households.find(h => h.id === id);
    document.getElementById('householdName').textContent = `${translations[lang].household_prefix}${escapeHTML(household.head_name)}`;
    showSection('householdDetailSection');
}

function displayMembers() {
    showLoading();
    const tbody = document.getElementById('memberTableBody');
    tbody.innerHTML = '';
    const members = householdMembers.filter(m => m.household_id === currentHouseholdId);
    members.forEach((member, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${escapeHTML(member.name)}</td>
            <td>${escapeHTML(member.cccd)}</td>
            <td>${escapeHTML(member.role)}</td>
            <td>${escapeHTML(member.relationship)}</td>
            <td>
                <a class="action-btn" onclick="showEditMemberModal(${member.id})">${translations[lang].edit}</a>
                ${member.role !== 'Chủ hộ' ? `<a class="action-btn" onclick="deleteMember(${member.id})">${translations[lang].delete}</a>` : ''}
            </td>
        `;
        tbody.appendChild(row);
    });
    hideLoading();
}

function showAddMemberModal() {
    const form = document.getElementById('memberForm');
    form.reset();
    document.getElementById('memberId').value = '';
    document.getElementById('modalTitle').textContent = translations[lang].add_member;
    document.getElementById('modalTitle').setAttribute('data-lang', 'add_member');
    document.getElementById('submitMemberBtn').textContent = translations[lang].add;
    document.getElementById('submitMemberBtn').setAttribute('data-lang', 'add');
    document.getElementById('memberModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function showOtherEthnicity(select) {
    var input = document.getElementById("ethnicity_other");
    if (select.value === "khac") {
        input.style.display = "block";
        input.required = true;
    } else {
        input.style.display = "none";
        input.required = false;
        input.value = "";
    }
}
function showEditMemberModal(id) {
    const member = householdMembers.find(m => m.id === id);
    if (!member) return;
    const form = document.getElementById('memberForm');
    form.querySelector('[name="name"]').value = member.name;
    const relationshipValue = ['chuho', 'vo', 'chong', 'con', 'chau', 'ongba', 'cha', 'me', 'anh', 'chi', 'em'].includes(member.relationship.toLowerCase()) ? member.relationship.toLowerCase() : 'khac';
    form.querySelector('[name="relationship"]').value = relationshipValue;
    if (relationshipValue === 'khac') {
        document.getElementById('quanhe_khac_input').value = member.relationship;
        document.getElementById('quanhe_khac_input').style.display = 'block';
    }
    form.querySelector('[name="gender"]').value = member.gender;
    form.querySelector('[name="birthdate"]').value = member.birthdate;
    form.querySelector('[name="cccd"]').value = member.cccd;
    form.querySelector('[name="ethnicity"]').value = member.ethnicity;
    form.querySelector('[name="occupation"]').value = member.occupation;
    form.querySelector('[name="residence_time"]').value = member.residence_time;
    form.querySelector('[name="permanent_address"]').value = member.permanent_address;
    form.querySelector('[name="current_address"]').value = member.current_address;
    form.querySelector('[name="phone"]').value = member.phone;
    form.querySelector('[name="residence_status"]').value = member.residence_status;
    document.getElementById('memberId').value = id;
    document.getElementById('modalTitle').textContent = translations[lang].edit_member;
    document.getElementById('modalTitle').setAttribute('data-lang', 'edit_member');
    document.getElementById('submitMemberBtn').textContent = translations[lang].save;
    document.getElementById('submitMemberBtn').setAttribute('data-lang', 'save');
    document.getElementById('memberModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeMemberModal() {
    document.getElementById('memberModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    document.getElementById('memberForm').reset();
    document.getElementById('quanhe_khac_input').style.display = 'none';
    document.querySelectorAll('.error').forEach(e => e.style.display = 'none');
}

/**
 * Kiểm tra dữ liệu form thành viên
 * @param {FormData} formData - Dữ liệu form
 * @param {string} memberId - ID thành viên (nếu đang sửa)
 * @returns {boolean} Hợp lệ hay không
 */
function validateMemberForm(formData, memberId) {
    let isValid = true;
    const name = formData.get('name');
    const nameRegex = /^[A-Za-zÀ-ỹ\s]+$/;
    if (!nameRegex.test(name)) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }
    const birthdate = formData.get('birthdate');
    const today = new Date('2025-04-30');
    if (!birthdate || new Date(birthdate) > today) {
        document.getElementById('birthdateError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('birthdateError').style.display = 'none';
    }
    const cccd = formData.get('cccd');
    const cccdRegex = /^\d{12}$/;
    const cccdExists = householdMembers.some(m => m.cccd === cccd && (!memberId || m.id !== parseInt(memberId)));
    if (!cccdRegex.test(cccd) || cccdExists) {
        document.getElementById('cccdError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('cccdError').style.display = 'none';
    }
    const phone = formData.get('phone');
    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('phoneError').style.display = 'none';
    }
    const requiredFields = ['relationship', 'gender', 'ethnicity', 'occupation', 'residence_time', 'permanent_address', 'current_address', 'residence_status'];
    requiredFields.forEach(field => {
        if (!formData.get(field)) {
            isValid = false;
            console.log(`Required field missing: ${field}`);
        }
    });
    return isValid;
}

function handleMemberSubmit(e) {
    e.preventDefault();
    showLoading();
    const formData = new FormData(e.target);
    const memberId = document.getElementById('memberId').value;
    if (!validateMemberForm(formData, memberId)) {
        hideLoading();
        return;
    }
    const relationship = formData.get('relationship') === 'khac' ? (formData.get('quanhe_khac') || 'Khác') : formData.get('relationship');
    const memberData = {
        household_id: currentHouseholdId,
        name: formData.get('name'),
        cccd: formData.get('cccd'),
        role: formData.get('relationship') === 'chuho' ? 'Chủ hộ' : 'Thành viên',
        relationship: relationship,
        gender: formData.get('gender'),
        birthdate: formData.get('birthdate'),
        ethnicity: formData.get('ethnicity'),
        occupation: formData.get('occupation'),
        residence_time: formData.get('residence_time'),
        permanent_address: formData.get('permanent_address'),
        current_address: formData.get('current_address'),
        phone: formData.get('phone'),
        residence_status: formData.get('residence_status')
    };
    if (memberId) {
        const index = householdMembers.findIndex(m => m.id === parseInt(memberId));
        householdMembers[index] = { id: parseInt(memberId), ...memberData };
    } else {
        memberData.id = householdMembers.length ? Math.max(...householdMembers.map(m => m.id)) + 1 : 1;
        householdMembers.push(memberData);
    }
    displayMembers();
    closeMemberModal();
    hideLoading();
}

function hienInputKhac(select) {
    const input = document.getElementById('quanhe_khac_input');
    if (select.value === 'khac') {
        input.style.display = 'block';
        input.required = true;
    } else {
        input.style.display = 'none';
        input.required = false;
        input.value = '';
    }
}

function deleteMember(id) {
    memberToDelete = id;
    document.getElementById('deleteMemberModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeDeleteMemberModal() {
    document.getElementById('deleteMemberModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    memberToDelete = null;
}

function confirmDeleteMember() {
    if (memberToDelete) {
        householdMembers = householdMembers.filter(m => m.id !== memberToDelete);
        displayMembers();
        closeDeleteMemberModal();
    }
}

function exportMembersToExcel() {
    showLoading();
    try {
        const members = householdMembers.filter(m => m.household_id === currentHouseholdId);
        if (!members.length) {
            showErrorModal(translations[lang].no_data, 'EMPTY_DATA');
            hideLoading();
            return;
        }
        const data = members.map((m, index) => ({
            [translations[lang].no]: index + 1,
            [translations[lang].member]: m.name,
            [translations[lang].cccd]: m.cccd,
            [translations[lang].role]: m.role,
            [translations[lang].relationship]: m.relationship,
            [translations[lang].gender]: m.gender === 'nam' ? translations[lang].male : translations[lang].female,
            [translations[lang].birthdate]: m.birthdate,
            [translations[lang].ethnicity]: m.ethnicity,
            [translations[lang].occupation]: m.occupation,
            [translations[lang].residence_time]: m.residence_time,
            [translations[lang].permanent_address]: m.permanent_address,
            [translations[lang].current_address]: m.current_address,
            [translations[lang].phone]: m.phone,
            [translations[lang].residence_status]: m.residence_status === '1' ? translations[lang].residing : m.residence_status === '2' ? translations[lang].moved : translations[lang].temporarily_absent
        }));
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Members");
        XLSX.write(wb, "household_members.xlsx");
        hideLoading();
    } catch (error) {
        showErrorModal(translations[lang].export_failed, 'EXPORT_FAILED');
        hideLoading();
    }
}

// Khởi tạo
document.getElementById('loginForm').addEventListener('submit', handleLogin);
document.getElementById('searchForm').addEventListener('input', debounce(searchHouseholds, 300));
document.getElementById('householdForm').addEventListener('submit', handleHouseholdSubmit);
document.getElementById('memberForm').addEventListener('submit', handleMemberSubmit);
if (localStorage.getItem('isLoggedIn') === 'true') {
    showSection('householdListSection');
} else {
    showSection('loginSection');
}
window.onclick = function(event) {
    const modals = ['addHouseholdModal', 'memberModal', 'deleteMemberModal', 'errorModal', 'errorPopup'];
    modals.forEach(id => {
        const modal = document.getElementById(id);
        if (event.target === modal) {
            if (id === 'addHouseholdModal') closeAddHouseholdModal();
            else if (id === 'memberModal') closeMemberModal();
            else if (id === 'deleteMemberModal') closeDeleteMemberModal();
            else if (id === 'errorModal') closeErrorModal();
            else if (id === 'errorPopup') closeErrorPopup();
        }
    });
};