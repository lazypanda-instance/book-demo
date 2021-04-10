import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import * as React from 'react';
import MainLayout from "../../../components/MainLayout";
import { Book, Books } from "../../../interface";
import booksArray from "../../../utils/booksData";
import BookCoverPage from "../../../components/BookCoverPage";

type Props = {
  item?: Books
  errors?: string
}
const booksCategory = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <MainLayout title="Error | LazyPandaTech">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </MainLayout>
    )
  };

  return (
    <MainLayout title={`${item ? item.categoryTitle : 'Books Category'} | LazyPandaTech`}>
      <div className="container-fluid">
        <div>Title: {item.categoryTitle}</div>
        <div>Description: {item.description}</div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {item.books.map((book: Book) => (
            <Link href="/books/[category]/[bookTitle]" as={`/books/${item.category}/${book.bookTitle}`}>
              {/* <BookCoverPage book={book}></BookCoverPage> */}
              <div className="col mb-4">
                <div className="card">
                  <div>
                    <div>(Image goes here)</div>

                    <div className="card-body">
                      <div className="card-title">Books Name: {book.bookTitle}</div>
                      {/* <Image src={book.coverPage} alt="logo" priority={true} width={200} height={300}></Image> */}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default booksCategory;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = booksArray.map((book) => ({
    params: { category: book.category }
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const category = params?.category
    const item = booksArray.find((data) => data.category === category)

    return { props: { item } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}