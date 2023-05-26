const Header = function () {
    return /*html*/`
    <div class="tw-bg-[#1A94FF] tw-py-3">
        <nav class="tw-w-[1300px] tw-mx-auto tw-flex tw-items-center tw-justify-between">
            <div>
                <a href="">
                    <img class="tw-mb-3" src="../../images/logo.png">
                    <img src="../../images/freeship.png">
                </a>
            </div>
            <div>
                <input type="text" class="tw-w-[600px] tw-h-[40px] tw-p-2 tw-outline-none" placeholder="Search...">
                <button class="tw-w-[120px] tw-h-[40px] tw-bg-[#0D5CB6] tw-text-white">Tìm kiếm</button>
            </div>
            <div class="tw-flex">
                <div class="tw-flex tw-items-center tw-mr-2"><img src="../../images/user.png""></div>
                <div class="tw-text-white">
                    <a href="#"" class="tw-text-white hover:tw-text-white tw-no-underline hover:tw-underline">Đăng nhập</a>/<a href="#"" class="tw-text-white hover:tw-text-white tw-no-underline hover:tw-underline">Đăng kí</a>
                    <div><a href="#" class="tw-text-white hover:tw-text-white tw-no-underline hover:tw-underline">Tài khoản</a></div>
                </div>
            </div>
            <div class="tw-flex tw-text-white">
                <img src="../../images/cart.png" class="tw-mr-2">
                <a href="#">
                    <div class="tw-relative">
                        <span class="tw-text-[13px] tw-absolute tw-top-0 tw-right-0 tw-text-white tw-bg-[#FDD835] tw-rounded-full tw-w-[19px] tw-h-[19px] tw-flex tw-items-center tw-justify-center">0</span>
                    </div>
                </a>
                <span class="tw-mt-2">Gio hang</span>
            </div>
        </nav>

    </div>
    `
}

export default Header;