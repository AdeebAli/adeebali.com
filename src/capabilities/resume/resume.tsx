import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  Heading,
  Stack,
  Tag,
  Text,
  List,
  StackSeparator,
  SeparatorProps,
} from "@chakra-ui/react";
import Image from "next/image";
import { DateTime } from "luxon";
import { AiOutlineDownload } from "react-icons/ai";
import himsLogo from "../../../public/images/himslogo.svg";
import targetLogo from "../../../public/images/targetlogo.svg";
import optumLogo from "../../../public/images/optumlogo.svg";
import spsLogo from "../../../public/images/spslogo.svg";
import umnLogo from "../../../public/images/umnlogo.svg";
import {
  formatDurationYearsMonths,
  formattedDateStringMonthAndYear,
  formattedEndDateString,
} from "../../util/datetime";
import resumeData, {
  type ExperienceItem,
  type EducationItem,
  type OrganizationItem,
  type Skills,
} from "./resumeData";

type DividerProps = SeparatorProps & {
  lightColor?: string;
  darkColor?: string;
};

const imageMap: Record<string, SvgImage> = {
  "hims & hers": himsLogo,
  Target: targetLogo,
  Optum: optumLogo,
  "SPS Commerce": spsLogo,
  "University of Minnesota - Twin Cities": umnLogo,
  "Carlson School of Management": umnLogo,
};

const Divider = ({
  lightColor,
  darkColor,
  ...otherProps
}: DividerProps) => (
  <StackSeparator
    borderColor={{
      base: lightColor ?? "blackAlpha.400",
      _dark: darkColor ?? "whiteAlpha.400",
    }}
    {...otherProps}
  />
);

const SkillsCard = ({ skillItems }: { skillItems: Skills }) => {
  const { languages, frameworks, CI, databases, tools, runTimes } = skillItems;
  return (
    <Card.Root>
      <Card.Header>
        <Heading paddingBottom={0} size="lg">
          Skills
        </Heading>
      </Card.Header>
      <Card.Body>
        <Stack direction="column" gap={2}>
          <Box>
            <Heading marginBottom={2} size="md">
              Languages
            </Heading>
            {languages.map((language, index) => (
              <Tag.Root
                marginRight={2}
                marginBottom={2}
                key={index}
                size="md"
                colorPalette="red"
                borderRadius="full"
              >
                {language}
              </Tag.Root>
            ))}
          </Box>
          <Box>
            <Heading marginBottom={2} size="md">
              Frameworks
            </Heading>
            {frameworks.map((framework, index) => (
              <Tag.Root
                marginRight={2}
                marginBottom={2}
                key={index}
                size="md"
                colorPalette="orange"
                borderRadius="full"
              >
                {framework}
              </Tag.Root>
            ))}
          </Box>
          <Box>
            <Heading marginBottom={2} size="md">
              Continuous Integration
            </Heading>
            {CI.map((ciItem, index) => (
              <Tag.Root
                marginRight={2}
                marginBottom={2}
                key={index}
                size="md"
                colorPalette="blue"
                borderRadius="full"
              >
                {ciItem}
              </Tag.Root>
            ))}
          </Box>
          <Box>
            <Heading marginBottom={2} size="md">
              Databases
            </Heading>
            {databases.map((database, index) => (
              <Tag.Root
                marginRight={2}
                marginBottom={2}
                key={index}
                size="md"
                colorPalette="green"
                borderRadius="full"
              >
                {database}
              </Tag.Root>
            ))}
          </Box>
          <Box>
            <Heading marginBottom={2} size="md">
              Tools
            </Heading>
            {tools.map((tool, index) => (
              <Tag.Root
                marginRight={2}
                marginBottom={2}
                key={index}
                size="md"
                colorPalette="cyan"
                borderRadius="full"
              >
                {tool}
              </Tag.Root>
            ))}
          </Box>
          <Box>
            <Heading marginBottom={2} size="md">
              Runtimes
            </Heading>
            {runTimes.map((runTime, index) => (
              <Tag.Root
                marginRight={2}
                marginBottom={2}
                key={index}
                size="md"
                colorPalette="pink"
                borderRadius="full"
              >
                {runTime}
              </Tag.Root>
            ))}
          </Box>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};

const OrganizationCard = ({
  organizationItems,
}: {
  organizationItems: OrganizationItem[];
}) => {
  return (
    <Card.Root>
      <Card.Header>
        <Heading size="lg">Organizations</Heading>
      </Card.Header>
      <Card.Body>
        <Stack direction="column" gap={8}>
          {organizationItems.map((organizationItem, index) => {
            const { position, startDate, endDate, orgName, description } =
              organizationItem;

            return (
              <Box key={index}>
                <Stack direction="row" gap={4}>
                  <Box
                    boxSize={{ base: "36", md: "60px"  }}
                  >
                    <Image src={imageMap[orgName]} alt={`${orgName} logo`} />
                  </Box>
                  <Stack direction="column" gap={4}>
                    <Stack direction="column" gap={2}>
                      <Heading size="md">{orgName}</Heading>
                      <Stack direction="row">
                        <Text fontSize={14}>{position} •</Text>
                        <Text
                          fontSize={14}
                          color="mutedText"
                        >
                          {formattedDateStringMonthAndYear(startDate)} -{" "}
                          {formattedEndDateString(endDate)}
                        </Text>
                      </Stack>
                      <Stack direction="column" gap={0}>
                        <List.Root as="ul">
                          {description.map((bulletPoint, index) => (
                            <List.Item fontSize={14} key={index}>
                              {bulletPoint}
                            </List.Item>
                          ))}
                        </List.Root>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            );
          })}
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};

const EducationCard = ({
  educationItems,
}: {
  educationItems: EducationItem[];
}) => {
  return (
    <Card.Root>
      <Card.Header>
        <Heading size="lg">Education</Heading>
      </Card.Header>
      <Card.Body>
        <Stack direction="column" gap={8}>
          {educationItems.map((education, index) => {
            const {
              school,
              startDate,
              gradDate,
              gpa,
              concentrations,
              activities,
            } = education;
            return (
              <Box key={index}>
                <Stack direction="row" gap={4}>
                  <Box
                    boxSize={{ base: "24" , md: "60px" }}
                  >
                    <Image src={imageMap[school]} alt={`${school} logo`} />
                  </Box>
                  <Stack direction="column" gap={4}>
                    <Stack direction="column" gap={2}>
                      <Heading size="md">{school}</Heading>
                      <Text
                        color="mutedText"
                        fontSize={14}
                      >
                        {DateTime.fromISO(startDate).toFormat("y")} -{" "}
                        {DateTime.fromISO(gradDate).toFormat("y")}
                      </Text>
                      <Stack direction="column" gap={0}>
                        {concentrations.map((concentration, index) => {
                          const { degreeName, school } = concentration;
                          return (
                            <Text fontSize={14} key={index}>
                              {degreeName} - {school}
                            </Text>
                          );
                        })}
                      </Stack>
                      <Text fontWeight={"bold"} fontSize={14}>
                        GPA: {gpa}
                      </Text>
                      <Stack paddingTop={4} direction="column">
                        <Heading size="xs">Activities</Heading>
                        <Stack direction="column" gap={0}>
                          <List.Root as="ul">
                            {activities.map((activity, index) => (
                              <List.Item fontSize={14} key={index}>
                                {activity}
                              </List.Item>
                            ))}
                          </List.Root>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            );
          })}
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};

const ExperienceCard = ({
  experienceItems,
}: {
  experienceItems: ExperienceItem[];
}) => {
  return (
    <Card.Root>
      <Card.Header>
        <Heading size="lg" paddingBottom={6}>
          Experience
        </Heading>
      </Card.Header>
      <Card.Body>
        <Stack direction="column" gap={8}>
          {experienceItems.map((experience, index) => {
            const { company, startDate, endDate, teams } = experience;
            return (
              <Box key={index}>
                <Stack direction="row" gap={4}>
                  <Box
                    boxSize={{ base: "48", md: "60px"}}
                  >
                    <Image src={imageMap[company]} alt={`${company} logo`} />
                  </Box>
                  <Stack direction="column" gap={4}>
                    <Stack direction="column" gap={0}>
                      <Heading size="md">{company}</Heading>
                      <Text fontSize={14}>
                        {formattedDateStringMonthAndYear(startDate)} -{" "}
                        {formattedEndDateString(endDate)} •{" "}
                        {formatDurationYearsMonths(startDate, endDate)}
                      </Text>
                    </Stack>
                    {teams.map((team, index) => {
                      const { roles, description } = team;
                      return (
                        <Box key={index}>
                          <Stack direction="column" gap={2}>
                            {roles.map((role, index) => {
                              const { title, startDate, endDate } = role;

                              return (
                                <Stack direction="column" key={index}>
                                  <Heading size="sm">{title}</Heading>
                                  <Text
                                    color="mutedText"
                                    fontSize={14}
                                  >
                                    {formattedDateStringMonthAndYear(startDate)}{" "}
                                    - {formattedEndDateString(endDate)}
                                  </Text>
                                </Stack>
                              );
                            })}
                            <Stack direction="column" gap={0}>
                              <List.Root as="ul">
                                {description.map((bulletPoint, index) => (
                                  <List.Item fontSize={14} key={index}>
                                    {bulletPoint}
                                  </List.Item>
                                ))}
                              </List.Root>
                            </Stack>
                          </Stack>
                        </Box>
                      );
                    })}
                  </Stack>
                </Stack>
              </Box>
            );
          })}
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};

const ResumeCard = () => {
  const { experience, education, organizations, skills } = resumeData.sections;

  return (
    <Card.Root
      background="shade"
      paddingTop={5}
      alignSelf="center"
    >
      <Stack direction={["column"]} gap={8}>
        <Card.Header
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <Heading size={["2xl"]}>Adeeb Ali</Heading>
          <Center>
            <Stack mt={6} direction={["column", "row"]} gap={4}>
              <Box>{resumeData.header.location}</Box>
              <Divider />
              <Box>{resumeData.header.email}</Box>
            </Stack>
          </Center>
          <Text marginTop={8} maxWidth={"80%"}>
            {resumeData.header.aboutMe}
          </Text>
        </Card.Header>
        <Card.Body
          paddingX={{ base:  0 , md: "20px"}}
          paddingTop={0}
        >
          <Stack direction="column" gap={2}>
            <ExperienceCard experienceItems={experience} />
            <EducationCard educationItems={education} />
            <SkillsCard skillItems={skills} />
            <OrganizationCard organizationItems={organizations} />
          </Stack>
        </Card.Body>
      </Stack>
    </Card.Root>
  );
};

const Resume = () => (
  <Flex mt={8} width="100%" flexDirection={"column"} alignItems="center">
    <Box width={{ base: "100%", md: "85%"}}>
      <Box textAlign="right" marginBottom={4}>
        <Button variant="solid" colorPalette="green" asChild>
          <a
            href="documents/Adeeb_Ali_Resume.pdf"
            download="Adeeb_Ali_Resume.pdf"
          >
            <AiOutlineDownload />
            Download My Resume!
          </a>
        </Button>
      </Box>
      <ResumeCard />
    </Box>
  </Flex>
);

export default Resume;
