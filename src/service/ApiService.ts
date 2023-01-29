import axios from "axios";
import { MessagesInterface } from "../model/MessagesModel";
import { ProductInterface } from "../model/productModel";
import { UserInterface } from "../model/UserModel";

class ApiService {

    // users

    async register(user: UserInterface) {
        try {
            const res = await axios.post('http://localhost:4000/users/register', user);
            return res
        } catch (e) {
            console.log(e);
        }
    }

    async login(user: UserInterface) {
        try {
            const res = await axios.post('http://localhost:4000/users/login', user);
            console.log(res);
            return res
        } catch (e) {
            console.log(e);
        }
    }

    async getUserById(id: number) {
        try {
            const res = await axios.get(`http://localhost:4000/users/${id}`);
            console.log(res);
            return res.data[0]
        } catch (e) {
            console.log(e);
        }
    }

    async addImageUser(file: any, id: number) {
        try {
            const res = await axios.post(`http://localhost:4000/users/addimage/${id}`, file);
            console.log(res);
            return res
        } catch (e) {
            console.log(e);
        }
    }

    // categories

    async getAllCategories() {
        try {
            const res = await axios.get('http://localhost:4000/categories');
            return res.data
        } catch (e) {
            console.log(e);
        }
    }

    // open ai

    async getAllImagesCtegoriesOpenai(query: any) {
        console.log(query);
        try {
            const res = await axios.post(`http://localhost:4000/openai/image`, { body: query });
            // console.log(res);
            return res.data
        } catch (e) {
            console.log(e);
        }
    }

    // products 

    async getProductsByCategorieId(id: number) {
        try {
            const res = await axios.get(`http://localhost:4000/products/${id}`);
            // console.log(res);
            return res.data
        } catch (e) {
            console.log(e);
        }
    }

    async AddProduct(product: FormData) {
        try {
            const res = await axios.post(`http://localhost:4000/products/add`, product);
            // console.log(res);
            return res.data
        } catch (e) {
            console.log(e);
        }
    }

    async getProduct(id: number) {
        try {
            const res = await axios.get(`http://localhost:4000/products/single/${id}`);
            // console.log(res);
            return res.data
        } catch (e) {
            console.log(e);
        }
    }

    async getProductsByUserId(id: number) {
        try {
            const res = await axios.get(`http://localhost:4000/products/userid/${id}`);
            // console.log(res);
            return res.data
        } catch (e) {
            console.log(e);
        }
    }

    async deleteProductById(product: ProductInterface | undefined, id: number) {
        console.log(id);

        try {
            const res = await axios.post(`http://localhost:4000/products/delete/${id}`, product);
            // console.log(res);
            return res.data
        } catch (e) {
            console.log(e);
        }
    }

    async addProductImages(formData: FormData, productId: number) {
        try {
            const res = await axios.post(`http://localhost:4000/products/images/${productId}`, formData);
            // console.log(res);
            return res.data
        } catch (e) {
            console.log(e);
        }
    }

    async getProductImages(id: number) {
        try {
            const res = await axios.post(`http://localhost:4000/products/getimages/${id}`);
            // console.log(res);
            return res.data
        } catch (e) {
            console.log(e);
        }
    }

    async editProduct(product: FormData, id: number) {
        try {
            const res = await axios.post(`http://localhost:4000/products/edit/${id}`, product);
            // console.log(res);
            return res.data
        } catch (e) {
            console.log(e);
        }
    }

    // cart

    async addToCart(userId: number, productId: number) {
        const data: any = {
            userId: userId,
            productId: productId
        }
        try {
            const res = await axios.post(`http://localhost:4000/cart/add`, data);
            // console.log(res);
            return res.data
        } catch (e) {
            console.log(e);
        }
    }

    async showCartProducts(userId: number) {
        try {
            const res = await axios.get(`http://localhost:4000/cart/show/${userId}`);
            // console.log(res);
            return res.data
        } catch (e) {
            console.log(e);
        }
    }

    async deleteFromCart(userId: number, productId: number) {
        const data: any = {
            userId: userId,
            productId: productId
        }
        try {
            const res = await axios.post(`http://localhost:4000/cart/delete`, data);
            // console.log(res);
            return res.data
        } catch (e) {
            console.log(e);
        }
    }

    async checkIfProductInUserCart(userId: number, productId: number) {
        const data: any = {
            userId: userId,
            productId: productId
        }
        try {
            const res = await axios.post(`http://localhost:4000/cart/check`, data);
            // console.log(res);
            return res.data
        } catch (e) {
            console.log(e);
        }
    }

    // messages

    async sendMessage(message: MessagesInterface) {
        try {
            const res = await axios.post(`http://localhost:4000/messages/send`, message);
            // console.log(res);
            return res.data
        } catch (e) {
            console.log(e);
        }
    }

    async getMessages(myId: number, otherUserId: any) {
        const ids = {
            myId,
            otherUserId
        }
        try {
            const res = await axios.get(`http://localhost:4000/messages/sent/${myId}/${otherUserId}`);
            // console.log(res);
            return res.data
        } catch (e) {
            console.log(e);
        }
    }

    async addTrueToSeenMessages(chatId: number) {
        try {
            const res = await axios.post(`http://localhost:4000/messages/seen/${chatId}`);
            // console.log(res);
            return res.data
        } catch (e) {
            console.log(e);
        }
    }

    // chat

    async getChatById(id: number) {
        try {
            const res = await axios.get(`http://localhost:4000/getchat/${id}`);
            // console.log(res);
            return res.data
        } catch (e) {
            console.log(e);
        }
    }
}


export const apiService = new ApiService();