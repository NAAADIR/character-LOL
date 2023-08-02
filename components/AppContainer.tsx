import { AppShell, Header } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

function AppContainer({ children }: any) {
  return (
    <AppShell
      styles={{
        main: {
          width: "100vw",
          paddingTop: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "transparent",
          minHeight: "unset",
        },
      }}
      fixed
      header={
        <Header
          height={80}
          p="md"
          style={{
            borderBottom: "2px solid #1a1a1a",
            background: "#111111",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Link href="/">
              <Image
                src="https://logosmarcas.net/wp-content/uploads/2020/11/League-of-Legends-Logo.png"
                alt="League of Legends"
                width={150}
                height={80}
              />
            </Link>
          </div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/NAAADIR"
          >
            <BsGithub size={30} fill="white" />
          </Link>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}

export default AppContainer;
