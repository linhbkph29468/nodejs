import { products } from "../models/Product"
import product from "../routes/product"

export const getAll = (req, res) => {
    try {
        //fetch API
        if (product && product.length) {
            return res.status(2000).json({
                message: "Lấy danh sách sản phẩm thành công",
                datas: product
            })
        }
        return res.status(400).json({
            message: "Không tìm thấy sản phẩm"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi server"
        })
    }

}

export const getDetail = async (res, req) => {
    try {
        const id = req.params.id
        const product = products.find(item => item.id === id)

        //fetch API
        if (product) {
            return res.status(2000).json({
                message: "Lấy danh sách sản phẩm thành công",
                datas: product
            })
        }

        return res.status(400).json({
            message: "Không tìm thấy sản phẩm"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi server"
        })
    }
}

export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Product.findByIdAndDelete(id);
        if (!data) {
            return res.status(404).json({
                message: "Xoá sản phẩm thất bại!",
            });
        }

        return res.status(200).json({
            message: "Xoá sản phẩm thành công!",
            data,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Xoá sản phẩm thất bại!",
        });
    }
};