import { Button, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { AiFillSkin } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <Head>
        <title>League of Legends</title>
        <meta
          name="keywords"
          content="leagueoflegends, champions, project, nextjs, riotapi"
        ></meta>
        <meta
          name="description"
          content="league of legends champions project created"
        ></meta>
      </Head>
      <Flex
        justifyContent="center"
        alignItems="center"
        height="50vh"
        padding="40px"
      >
        <motion.div
          initial={{ opacity: 0, translateY: -30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
          exit={{ opacity: 0 }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            marginTop: "200px",
          }}
        >
          <Text
            fontSize="30px"
            fontFamily="Friz-Medium"
            color="#d4b362"
            textShadow="1px 1px 1px rgba(0, 0, 0, 0.4)"
            textAlign="center"
            padding={"10px"}
          >
            Bienvenue dans mon application
          </Text>
          <Text
            fontSize="30px"
            fontFamily="Friz-Medium"
            color="#d4b362"
            textShadow="1px 1px 1px rgba(0, 0, 0, 0.4)"
            textAlign="center"
            padding={"10px"}
          >
            Voici la liste des champions de{" "}
            <Link
              href="https://www.leagueoflegends.com"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <b style={{ color: "#339af0" }}> League of Legends </b>
            </Link>
            ainsi que leurs
            <Link
              href="https://developer.riotgames.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "red" }}
            >
              &nbsp;sorts
            </Link>
          </Text>
          <motion.div
            initial={{ opacity: 0, translateX: 50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ marginTop: "50px" }}
          >
            <Button
              variant="gradient"
              bgGradient="linear(to-r, #d97f02, #d9c4a0)"
              size="lg"
              as="a"
              href="/champions"
              leftIcon={<AiFillSkin />}
            >
              Voir les champions
            </Button>
          </motion.div>
        </motion.div>
      </Flex>
    </>
  );
};

export default Home;
