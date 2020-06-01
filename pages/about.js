import Layout from '@components/Layout'

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <p className="description">

           I live in Amsterdam and work at Uber Freight. I grew up in New Zealand and studied engineering at the University of Auckland.
        </p>
        <p>
          Email: <a href="mailto:hi@callumherries.com">hi@callumherries.com</a>
        </p>
        <p>
          Elsewhere: <a href="https://github.com/callum-herries">callum-herries</a> on Github, <a href="https://twitter.com/home">callumherries</a> on Twitter.
        </p>
      </Layout>
    </>
  )
}

export default About

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
