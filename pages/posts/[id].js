import Head from 'next/head'
import Layout from '../../components/Layout/Layout'
import Date from '../../components/Date/Date'
import { getAllPostIds, getPostData  } from '../../lib/postsHelper'
import utilStyles from '../../styles/Utils.module.css'


export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    // console.log(postData);
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}


export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>

            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
  }

  