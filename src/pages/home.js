import Header from "@/components/header";
import Footer from "@/components/footer";
import data from "../../db.json" assert {type: 'json'};

const HomePage = function () {
    //console.log(data);
    return `
        <div class="tw-m-0 tw-p-0 tw-box-border">
            ${Header()}

            <div class="tw-h-[50px] tw-bg-[#F5F5FA]"></div>

            <div class="tw-w-[1300px] tw-mx-auto tw-mt-4 tw-mb-[100px]">
                <div class="tw-float-left tw-w-[17%]">
                    <h2 class="tw-text-[20px] tw-font-normal tw-mb-3 tw-uppercase">Danh mục sản phẩm</h2>
                    <ul class="tw-p-0">
                        <li class="tw-leading-[32px]"><a href="" class="tw-no-underline tw-text-black hover:tw-underline">English Books</a></li>
                        <li class="tw-leading-[32px]"><a href="" class="tw-no-underline tw-text-black hover:tw-underline">Sách tiếng Việt</a></li>
                        <li class="tw-leading-[32px]"><a href="" class="tw-no-underline tw-text-black hover:tw-underline">Văn phòng phẩm</a></li>
                        <li class="tw-leading-[32px]"><a href="" class="tw-no-underline tw-text-black hover:tw-underline">Quà lưu niệm</a></li>
                    </ul>
                </div>
                <div class="tw-float-right tw-w-[80%]">
                    <div>
                        <h2 class="tw-text-[30px] tw-font-medium tw-mx-6">Nhà sách Tiki</h2>
                        <img src="../../images/banner.png">
                    </div>
                    <div>
                        <ul class="tw-flex tw-p-0 tw-my-5 tw-border-b-2 tw-border-b-[#ccc]">
                            <li class="tw-mx-4 tw-py-2 tw-border-b-4 tw-border-b-[#fff] hover:tw-border-b-[#0D5CB6] hover:tw-border-b-4 hover:tw-text-[#0D5CB6]"><a href="#" class="tw-text-xl tw-no-underline tw-text-black">Phổ biến</a></li>
                            <li class="tw-mx-4 tw-py-2 tw-border-b-4 tw-border-b-[#fff] hover:tw-border-b-[#0D5CB6] hover:tw-border-b-4 hover:tw-text-[#0D5CB6]"><a href="#" class="tw-text-xl tw-no-underline tw-text-black">Bán chạy</a></li>
                            <li class="tw-mx-4 tw-py-2 tw-border-b-4 tw-border-b-[#fff] hover:tw-border-b-[#0D5CB6] hover:tw-border-b-4 hover:tw-text-[#0D5CB6]"><a href="#" class="tw-text-xl tw-no-underline tw-text-black">Hàng mới</a></li>
                            <li class="tw-mx-4 tw-py-2 tw-border-b-4 tw-border-b-[#fff] hover:tw-border-b-[#0D5CB6] hover:tw-border-b-4 hover:tw-text-[#0D5CB6]"><a href="#" class="tw-text-xl tw-no-underline tw-text-black">Giá thấp</a></li>
                            <li class="tw-mx-4 tw-py-2 tw-border-b-4 tw-border-b-[#fff] hover:tw-border-b-[#0D5CB6] hover:tw-border-b-4 hover:tw-text-[#0D5CB6]"><a href="#" class="tw-text-xl tw-no-underline tw-text-black">Giá cao</a></li>
                        </ul>
                    </div>
                    <div class="tw-grid tw-grid-cols-4 tw-gap-8">
                        ${data.map(function (book) {
                            return `
                            <div>
                                <a href="/detailProduct/${book.id}">
                                    <img src="${book.images[0]}">
                                    <h2 class="hover:tw-underline-offset-2">${book.name}</h2>
                                </a>
                                <div class="tw-flex tw-items-center tw-my-2">
                                    <div class="tw-flex">
                                        <img src="../../images/Vector.png">
                                        <img src="../../images/Vector.png">
                                        <img src="../../images/Vector.png">
                                        <img src="../../images/Vector.png">
                                        <img src="../../images/Vector.png">
                                    </div>
                                    <span class="tw-text-[#787878] tw-whitespace-nowrap tw-ml-1"> | ${book?.quantity_sold ? book?.quantity_sold?.text : 'Da ban 0'}</span>
                                </div>
                                <div>
                                    <span>${book.list_price}d</span>
                                </div>
                            </div>
                            `
                        }).join("")}
                    </div>
                </div>
                <div class="tw-clear-both"></div>
            </div>

            ${Footer()}
        </div>
    `
}

export default HomePage;