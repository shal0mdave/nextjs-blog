import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/Layout/Layout'


export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <Image 
                src="/images/profile.jpg"
                alt="Picture of the author"
                height={144}
                width={144}
            />
            <h2>
                <Link href="/">
                <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    );
}
  