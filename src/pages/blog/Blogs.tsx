import { Card, Form, Row, Col, Container } from "react-bootstrap";
import BlogServices from "../../services/blogs.services";
import { useEffect, useState } from "react";
interface IBlog {
    title: string,
    author: string,
    created_at: string,
    content: string,
    color?: string,
    category: string,
    blog_image_url: string
}
const Blogs = () => {
    const [blogs, setBlogs] = useState<IBlog[]>([])
    const loadBlog = async () => {
        const res = await BlogServices.loadBlogs({ page: 1, limit: 10, search: "" })
        setBlogs(res.data.data)
    }
    useEffect(() => { loadBlog() }, [])

    return (
        <Container className="py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Blogs —</h2>
                <Form className="d-flex gap-2">
                    <Form.Control type="text" placeholder="Search..." className="blog-search" style={{ width: '250px' }} />
                    <button className="blog-add-btn">+ Add</button>
                </Form>
            </div>

            <Row>
                {blogs.map((blog, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card className="h-100" style={{ border: "none", borderRadius: "0" }}>
                            <Card.Img variant="top" src={blog.blog_image_url} style={{ height: '200px', objectFit: 'cover', borderRadius: "0" }} />
                            <Card.Body style={{ padding: 0, marginTop: "32px" }}>
                                <Card.Subtitle className="mb-2 text-muted">
                                    {blog.author} • {blog.created_at}
                                </Card.Subtitle>
                                <div className="d-flex justify-content-between align-items-start">
                                    <Card.Title style={{ fontSize: "24px", gap: "16px" }}>{blog.title}
                                        <span style={{ marginLeft: "16px" }}><i className="bi bi-arrow-up-right" style={{ color: "#6941C6", fontSize: "24px" }}></i></span>
                                    </Card.Title>
                                </div>
                                <Card.Text className="mt-2" style={{ fontSize: '0.9rem', color: '#5a5a5a' }}>
                                    {blog.content}
                                </Card.Text>
                                <span style={{
                                    color: "#6941C6",
                                    background: "#F9F5FF",
                                    width: "95px",
                                    height: "24px",
                                    paddingTop: "2px",
                                    paddingRight: "10px",
                                    paddingBottom: "2px",
                                    paddingLeft: "10px",
                                    borderRadius: "16px",
                                    fontSize: "12px"

                                }}>{blog.category}</span>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container >
    );
}
export default Blogs;
