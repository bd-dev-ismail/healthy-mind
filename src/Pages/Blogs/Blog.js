import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
    return (
      <div className="container mx-auto min-h-screen">
        <Helmet>
          <title>Blog -Healthy Mind</title>
        </Helmet>
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="text-2xl text-center font-semibold sm:text-4xl">
              Most Asked Interview Questions
            </h2>
            <p className="mt-4 mb-8 text-center dark:text-gray-400">
              Here are some interview questions answer for my Assginment Bonus
              Marks.Those question <br /> are mostly asked in many interview. so
              i need to take it seriously , beacuse after few days I need to
              face interview. <br /> Then I would be a Jonior Web Developer.
            </p>
            <div className="space-y-4">
              <details className="w-full border rounded-lg" open="">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  Difference between sql & no sql ?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  SQL is the programming language used to interface with
                  relational databases. (Relational databases model data as
                  records in rows and tables with logical links between them).
                  NoSQL is a class of DBMs that are non-relational and generally
                  do not use SQL.There are five practical differences between
                  SQL and NoSQL: Language Scalability Structure Properties
                  Support and communities
                </p>
              </details>
              <details className="w-full border rounded-lg" open="">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  What is JWT, and how does it work?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  JSON Web Token (JWT) is an open standard (RFC 7519) for
                  securely transmitting information between parties as JSON
                  object. It is compact, readable and digitally signed using a
                  private key/ or a public key pair by the Identity
                  Provider(IdP).Basically the identity provider(IdP) generates a
                  JWTs differ from other web tokens in that they contain a set
                  of claims. Claims are used to transmit information between two
                  parties. What these claims are depends on the use case at
                  hand. For example, a claim may assert who issued the token,
                  how long it is valid for, or what permissions the client has
                  been granted. A JWT is a string made up of three parts,
                  separated by dots (.), and serialized using base64. In the
                  most common serialization format, compact serialization, the
                  JWT looks something like this: xxxxx.yyyyy.zzzzz.
                </p>
              </details>
              <details className="w-full border rounded-lg" open="">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  What is the difference between javascript and NodeJS?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  JavaScript is a simple programming language that can be used
                  with any browser that has the JavaScript Engine installed.
                  Node.js, on the other hand, is an interpreter or execution
                  environment for the JavaScript programming language.
                  Javascript Mainly using for any client-side activity for a web
                  application, like possible attribute validation or refreshing
                  the page in a specific interval or provide some dynamic
                  changes in web pages without refreshing the page. & Node js
                  used for accessing or performing any non-blocking operation of
                  any operating system, like creating or executing a shell
                  script or accessing any hardware-specific information or
                  running any backend job.
                </p>
              </details>
              <details className="w-full border rounded-lg" open="">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  How does NodeJS handle multiple requests at the same time?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  NodeJS receives multiple client requests and places them into
                  EventQueue. NodeJS is built with the concept of event-driven
                  architecture. NodeJS has its own EventLoop which is an
                  infinite loop that receives requests and processes them.
                  EventLoop is the listener for the EventQueue.
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Blog;