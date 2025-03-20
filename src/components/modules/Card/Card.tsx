import { Card as AntdCard, Flex, Avatar, Image, Carousel } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Tag from "../../elements/Tag";

const Card = () => {
  return (
    <AntdCard style={{ width: 380, borderRadius: 18 }}>
      <div className="w-full h-full flex flex-col gap-4">
        <Flex align="center" gap={12}>
          <Avatar size="large" icon={<UserOutlined />} />
          <Flex vertical>
            <h4 style={{ margin: 0 }} className="font-bold">
              Rifdo Shah Alam
            </h4>
            <span className="!text-xs" style={{ margin: 0 }}>
              Monday, 20 Nov 2024
            </span>
          </Flex>
        </Flex>
        <p className="text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Flex gap="4px 0" wrap>
          <Tag color="#48E0AC" onClose={() => {}}>
            Tag 1
          </Tag>
          <Tag color="#48E0AC" onClose={() => {}}>
            Tag 2
          </Tag>
          <Tag color="#48E0AC" onClose={() => {}}>
            Tag Blue
          </Tag>
        </Flex>
        <Carousel arrows infinite={false}>
          <Image
            width={"100%"}
            height={200}
            style={{ objectFit: "cover" }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Image
            width={"100%"}
            height={200}
            style={{ objectFit: "cover" }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Image
            width={"100%"}
            height={200}
            style={{ objectFit: "cover" }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Carousel>
      </div>
    </AntdCard>
  );
};

export default Card;
