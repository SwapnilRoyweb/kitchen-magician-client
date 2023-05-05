import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FaFilePdf } from 'react-icons/fa';
import Pdf from "react-to-pdf";

const Blog = () => {

    const ref = React.createRef();

    return (
        <div className='my-5'>
            <Pdf targetRef={ref} filename="blog.pdf">
                {({ toPdf }) => <button className='btn btn-danger mb-3' onClick={toPdf}><FaFilePdf></FaFilePdf> Download PDF</button>}
            </Pdf>
            <Accordion defaultActiveKey={['0']} alwaysOpen ref={ref}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Tell us the differences between uncontrolled and controlled components.</Accordion.Header>
                    <Accordion.Body>
                        the main difference between controlled and uncontrolled components is that controlled components are managed by a parent component or a framework, while uncontrolled components manage their own state and behavior.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How to validate React props using PropTypes</Accordion.Header>
                    <Accordion.Body>
                        React provides a built-in way to validate the props that are passed to a component using a utility library called PropTypes. PropTypes allow you to specify the expected type and shape of each prop that a component expects to receive.
                        PropTypes provides a wide range of validators for different types of data, such as strings, numbers, arrays, and objects, as well as custom validators that you can define yourself.
                        Using PropTypes to validate props can help catch errors early in the development process, and make your code more maintainable.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Tell us the difference between nodejs and express js.</Accordion.Header>
                    <Accordion.Body>
                        Node.js is a runtime environment that allows you to run JavaScript code outside of the browser.
                        Express.js, on the other hand, is a web framework built on top of Node.js. It provides a set of tools and conventions for building web applications and APIs in a structured and organized way. Express.js allows you to define routes, middleware, and handlers for HTTP requests, and provides a range of features such as templating engines, error handling, and session management.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                <Accordion.Header>What is a custom hook, and why will you create a custom hook?</Accordion.Header>
                <Accordion.Body>
                        A custom hook in React is a JavaScript function that allows you to reusable logic and stateful behavior into a standalone module that can be shared across multiple components in a React application. Custom hooks follow a specific naming convention, where the function name starts with use, and they can use other hooks and stateful React features such as useState, useEffect, and useContext.
                        You would create a custom hook to reuse logic and stateful behavior that i find myself using across multiple components in my application. For example, if i find myself repeatedly fetching data from an API and updating state in multiple components, I can create a custom hook to handle this logic, so that I don't have to repeat the same code in each component.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;