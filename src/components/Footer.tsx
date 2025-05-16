import { Flex, IconButton, SmartLink, Text } from "@/once-ui/components";
import { person, social } from "@/app/resources/content";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      fillWidth
      padding="8"
      horizontal="center"
      mobileDirection="column"
    >
      <Flex
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="center"
        vertical="center"
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          {/*<Text paddingX="4">{person.name}</Text>*/}
          <Text paddingX="4">VC</Text>
          <Text onBackground="neutral-weak">
            / Hecho con mucho AMOR para {" "}
            <SmartLink
              href="https://www.instagram.com/emii.albanez"
            >
              EMI
            </SmartLink>
          </Text>
        </Text>
        {/*<Flex gap="16">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              ),
          )}
        </Flex>*/}
      </Flex>
      <Flex height="80" show="s"></Flex>
    </Flex>
  );
};
