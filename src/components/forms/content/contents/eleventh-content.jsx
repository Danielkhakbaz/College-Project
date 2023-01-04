import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Textarea,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import DatePicker from "react-multi-date-picker";
import fa from "react-date-object/locales/persian_fa";
import jalali from "react-date-object/calendars/jalali";
import moment from "moment-jalaali";
import { useStepAction } from "providers/step/step-context";
import { Actions } from "providers/step/step-actions";

const EleventhContent = () => {
  const [joinedDate, setJoinedDate] = useState(
    new Intl.DateTimeFormat("fa-IR", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }).format(moment())
  );
  const [jalaliDate, setJalaliDate] = useState({
    value: new Date(),
    format: "YYYY/MM/DD",
    onChange: (date) => setJoinedDate(date.format()),
  });

  const { dispatch } = useStepAction();

  alert(joinedDate);

  return (
    <>
      <Flex
        id="contact-us"
        gap={8}
        paddingX={{ base: 4, lg: 6 }}
        paddingY={{ base: 4, md: 6, lg: 8 }}
      >
        <form style={{ width: "100%" }}>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            alignItems="center"
            gap={5}
          >
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="sm">
                  نتیجه‌ی Risk Assessment بیمار:
                </FormLabel>
                <Textarea
                  name="patientRiskAssessment"
                  type="text"
                  variant="outline"
                  fontSize={{ base: 12, md: 14 }}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="sm">
                  نتیجه‌ی Risk Assessment قلبی عروقی بیمار:
                </FormLabel>
                <Textarea
                  name="patientHeartRiskAssessment"
                  type="text"
                  variant="outline"
                  fontSize={{ base: 12, md: 14 }}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="sm">
                  برنامه‌ مراقبتی و درمانی بیمار چگونه است؟
                </FormLabel>
                <Textarea
                  name="yourCircumstances"
                  type="text"
                  variant="outline"
                  fontSize={{ base: 12, md: 14 }}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel fontSize="sm">زمان ملاقات بعدی با بیمار:</FormLabel>
                <DatePicker
                  className="rmdp-calendar"
                  name="birthDate"
                  calendar={jalali}
                  locale={fa}
                  format="YYYY/MM/DD"
                  fontSize={{ base: 12, md: 14 }}
                  width="100%"
                  {...jalaliDate}
                  onPropsChange={setJalaliDate}
                />
              </FormControl>
            </GridItem>
          </Grid>
          <Flex marginTop={8}>
            <ButtonGroup>
              <Link to="/forms/results">
                <Button fontSize={14} colorScheme="blue">
                  تمام
                </Button>
              </Link>
              <Button
                fontSize={14}
                colorScheme="red"
                onClick={() => dispatch({ type: Actions.PREV_STEP })}
              >
                قبلی‌
              </Button>
            </ButtonGroup>
          </Flex>
        </form>
      </Flex>
    </>
  );
};

export default EleventhContent;
