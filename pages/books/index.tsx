import { GetStaticProps } from "next";
import React from "react";
import BooksCard from "../../components/BooksCard";
import MainLayout from "../../components/MainLayout";
import { Books } from "../../interface";
import booksArray from "../../utils/booksData";

type Props = {
    items: Books[]
}

const books = ({ items }: Props) => {
    return (
        <MainLayout title='Books | LazyPandaTech'>
            <div className='container-fluid'>
                <div>All Books shows here</div>
                <BooksCard items={items} />
            </div>
        </MainLayout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const items: Array<Books> = booksArray;
    return { props: { items } }
}

export default books;