import { APIENDPOINT } from "../config";
import api from "./axiosConfig";
import axios from "axios";
class BlogServices {
    static async loadBlogs(data: {
        page: number,
        limit: number,
        search: string
    }) {
        return axios.post(`${APIENDPOINT}/blog-list`, data)
    }

    static async loadMyBlogs(data: {
        page: number,
        limit: number,
        search: string
    }) {
        return api.post(`${APIENDPOINT}/my-blog-list`, data)
    }
    static async loadCategory() {
        return api.post(`${APIENDPOINT}/category`)
    }
    static async createBlog(data: {
        title: string;
        blog_image_url: string;
        category_id: string;
        content: string;
    }) {
        return api.post(`${APIENDPOINT}/create`, data)
    }

    static async uploadImage(formdata:any) {
        return axios.post(`${APIENDPOINT}/upload`, formdata)
    }
}

export default BlogServices
