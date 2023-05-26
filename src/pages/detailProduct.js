import Header from "@/components/header";
import Footer from "@/components/footer";
import data from "../../db.json" assert {type: 'json'};

const detailProduct = function (param) {
    //console.log(param);
    console.log(param.data.id);
    const book = data.find(function(item) {
        return item.id == param.data.id;
    })
    return `
        <div>
            ${Header()}

            <div class="tw-h-[50px] tw-bg-[#F5F5FA]"></div>

            <div class="tw-w-[1300px] tw-mx-auto tw-mt-4 tw-mb-[100px]>
                <div>
                    <h2>ProductDetailPage</h2>
                </div>
                <div>
                
                </div>
            </div>

            ${Footer()}
        </div>
    `
}

export default detailProduct;