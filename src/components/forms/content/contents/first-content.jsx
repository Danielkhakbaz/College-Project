import { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Field } from "formik";
import {
  Flex,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Radio,
  RadioGroup,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import DatePicker from "react-multi-date-picker";
import fa from "react-date-object/locales/persian_fa";
import jalali from "react-date-object/calendars/jalali";
import { useStepContext } from "providers/step/step-context";
import { useStepAction } from "providers/step/step-context";
import { Actions } from "providers/step/step-actions";
import { Cities } from "components/forms/content/data/list-of-cities";
import moment from "moment-jalaali";

const FirstContent = () => {
  const [state, setState] = useState({
    gender: "",
  });
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

  const { step } = useStepContext();
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
        <Formik
          initialValues={{
            name: "",
            lastName: "",
            fatherName: "",
            nationalCode: "",
            gender: false,
            birthDate: "",
            birthPlace: "",
            martialStatus: "",
            numberOfChildren: "",
            education: "",
            job: "",
            phoneNumber: "",
            mobileNumber: "",
            waistSize: "",
            weight: "",
            height: "",
            bmi: "",
            SysBloodPressure: "",
            DiaBloodPressure: "",
            pr: "",
            vaccinationDates: "",
            visitByDentist: "",
            visitByOptometrist: "",
            amountOfPhsicalActivity: "",
            drugsTaking: "",
          }}
          onSubmit={() => {}}
        >
          {({ errors, touched, isValid }) => (
            <form style={{ width: "100%" }}>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                }}
                alignItems="center"
                gap={5}
              >
                <GridItem>
                  <FormControl
                    isInvalid={!!errors.name && touched.name}
                    isRequired
                  >
                    <FormLabel fontSize="sm">??????</FormLabel>
                    <Field
                      as={Input}
                      name="name"
                      type="text"
                      maxLength={20}
                      variant="outline"
                      fontSize={{ base: 12, md: 14 }}
                    />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl
                    isInvalid={!!errors.lastName && touched.lastName}
                    isRequired
                  >
                    <FormLabel fontSize="sm">?????? ????????????????</FormLabel>
                    <Field
                      as={Input}
                      label="?????? ????????????????"
                      name="lastName"
                      type="text"
                      maxLength={20}
                      variant="outline"
                      fontSize={{ base: 12, md: 14 }}
                    />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl
                    isInvalid={!!errors.fatherName && touched.fatherName}
                    isRequired
                  >
                    <FormLabel fontSize="sm">?????? ??????</FormLabel>
                    <Field
                      as={Input}
                      label="?????? ??????"
                      name="fatherName"
                      type="text"
                      maxLength={20}
                      variant="outline"
                      fontSize={{ base: 12, md: 14 }}
                    />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl
                    isInvalid={!!errors.nationalCode && touched.nationalCode}
                    isRequired
                  >
                    <FormLabel fontSize="sm">?????????????</FormLabel>
                    <Field
                      as={Input}
                      label="?????????????"
                      name="nationalCode"
                      type="number"
                      variant="outline"
                      fontSize={{ base: 12, md: 14 }}
                    ></Field>
                  </FormControl>
                </GridItem>
                <GridItem alignItems="space-between">
                  <FormControl
                    isInvalid={!!errors.gender && touched.gender}
                    isRequired
                  >
                    <FormLabel fontSize="sm">??????????</FormLabel>
                    <Field
                      as={RadioGroup}
                      label="??????????"
                      name="gender"
                      type="radio"
                      value={state.gender}
                      onChange={(value) =>
                        setState({ ...state, gender: value })
                      }
                      variant="outline"
                      fontSize={{ base: 12, md: 14 }}
                    >
                      <Flex gap={4}>
                        <Radio value="??????" size="sm" colorScheme="teal">
                          ??????
                        </Radio>
                        <Radio value="????" size="sm" colorScheme="teal">
                          ????
                        </Radio>
                      </Flex>
                    </Field>
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl
                    isInvalid={!!errors.birthDate && touched.birthDate}
                    isRequired
                  >
                    <FormLabel fontSize="sm">?????????? ????????</FormLabel>
                    <Field
                      className="rmdp-calendar"
                      as={DatePicker}
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
                <GridItem>
                  <FormControl
                    isInvalid={!!errors.birthPlace && touched.birthPlace}
                    isRequired
                  >
                    <FormLabel fontSize="sm">?????? ????????</FormLabel>
                    <Field
                      as={Select}
                      label="?????? ????????"
                      name="birthPlace"
                      type="text"
                      maxLength={20}
                      variant="outline"
                      fontSize="sm"
                      display="flex"
                      justifyContent="space-between"
                    >
                      {Cities.map((city) => (
                        <option value={city.name} key={city.name}>
                          {city.name}
                        </option>
                      ))}
                    </Field>
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl
                    isInvalid={!!errors.martialStatus && touched.martialStatus}
                    isRequired
                  >
                    <FormLabel fontSize="sm">?????????? ????????</FormLabel>
                    <Field
                      as={Input}
                      label="?????????? ????????"
                      name="martialStatus"
                      type="text"
                      maxLength={20}
                      variant="outline"
                      fontSize={{ base: 12, md: 14 }}
                    />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl
                    isInvalid={
                      !!errors.numberOfChildren && touched.numberOfChildren
                    }
                    isRequired
                  >
                    <FormLabel fontSize="sm">?????????? ??????????????</FormLabel>
                    <Field
                      as={Input}
                      label="?????????? ??????????????"
                      name="numberOfChildren"
                      type="text"
                      maxLength={20}
                      variant="outline"
                      fontSize={{ base: 12, md: 14 }}
                    />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl
                    isInvalid={!!errors.education && touched.education}
                    isRequired
                  >
                    <FormLabel fontSize="sm">??????????????</FormLabel>
                    <Field
                      as={Input}
                      label="??????????????"
                      name="education"
                      type="text"
                      maxLength={20}
                      variant="outline"
                      fontSize={{ base: 12, md: 14 }}
                    />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl
                    isInvalid={!!errors.job && touched.job}
                    isRequired
                  >
                    <FormLabel fontSize="sm">??????</FormLabel>
                    <Field
                      as={Input}
                      label="??????"
                      name="job"
                      type="text"
                      maxLength={20}
                      variant="outline"
                      fontSize={{ base: 12, md: 14 }}
                    />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl
                    isInvalid={!!errors.phoneNumber && touched.phoneNumber}
                    isRequired
                  >
                    <FormLabel fontSize="sm">???????? ????????</FormLabel>
                    <Field
                      as={Input}
                      label="???????? ????????"
                      name="phoneNumber"
                      type="text"
                      maxLength={20}
                      variant="outline"
                      fontSize={{ base: 12, md: 14 }}
                    />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl
                    isInvalid={!!errors.mobileNumber && touched.mobileNumber}
                    isRequired
                  >
                    <FormLabel fontSize="sm">???????? ??????????</FormLabel>
                    <Field
                      as={Input}
                      label="???????? ??????????"
                      name="mobileNumber"
                      type="text"
                      maxLength={20}
                      variant="outline"
                      fontSize={{ base: 12, md: 14 }}
                    />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl
                    isInvalid={!!errors.waistSize && touched.waistSize}
                    isRequired
                  >
                    <FormLabel fontSize="sm">?????? ?????? ???? ????????????????</FormLabel>
                    <Field
                      as={Input}
                      label="?????? ?????? ???? ????????????????"
                      name="waistSize"
                      type="text"
                      maxLength={20}
                      variant="outline"
                      fontSize={{ base: 12, md: 14 }}
                    />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl
                    isInvalid={!!errors.weight && touched.weight}
                    isRequired
                  >
                    <FormLabel fontSize="sm">?????? ???????? ???? ??????????????</FormLabel>
                    <Field
                      as={Input}
                      label="?????? ???????? ???? ??????????????"
                      name="weight"
                      type="text"
                      maxLength={20}
                      variant="outline"
                      fontSize={{ base: 12, md: 14 }}
                    />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl
                    isInvalid={!!errors.height && touched.height}
                    isRequired
                  >
                    <FormLabel fontSize="sm">???? ???? ????????????????</FormLabel>
                    <Field
                      as={Input}
                      label="???? ???? ????????????????"
                      name="height"
                      type="text"
                      maxLength={20}
                      variant="outline"
                      fontSize={{ base: 12, md: 14 }}
                    />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl
                    isInvalid={!!errors.bmi && touched.bmi}
                    isRequired
                  >
                    <FormLabel fontSize="sm">?????????? ??????????????????? BMI</FormLabel>
                    <Field
                      as={Input}
                      label="?????????? ??????????????????? BMI"
                      name="bmi"
                      type="text"
                      maxLength={20}
                      variant="outline"
                      fontSize={{ base: 12, md: 14 }}
                    />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl
                    isInvalid={
                      !!errors.SysBloodPressure && touched.SysBloodPressure
                    }
                    isRequired
                  >
                    <FormLabel fontSize="sm">?????????????? Sys(mmHg)</FormLabel>
                    <Field
                      as={Input}
                      label="?????????????? Sys(mmHg)"
                      name="SysBloodPressure"
                      type="text"
                      maxLength={20}
                      variant="outline"
                      fontSize={{ base: 12, md: 14 }}
                    />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl
                    isInvalid={
                      !!errors.DiaBloodPressure && touched.DiaBloodPressure
                    }
                    isRequired
                  >
                    <FormLabel fontSize="sm">?????????????? Dia(mmHg)</FormLabel>
                    <Field
                      as={Input}
                      label="?????????????? Dia(mmHg)"
                      name="DiaBloodPressure"
                      type="text"
                      maxLength={20}
                      variant="outline"
                      fontSize={{ base: 12, md: 14 }}
                    />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl isInvalid={!!errors.pr && touched.pr} isRequired>
                    <FormLabel fontSize="sm">?????????? ?????? PR</FormLabel>
                    <Field
                      as={Input}
                      label="?????????? ?????? PR"
                      name="pr"
                      type="text"
                      maxLength={20}
                      variant="outline"
                      fontSize={{ base: 12, md: 14 }}
                    />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl
                    isInvalid={
                      !!errors.vaccinationDates && touched.vaccinationDates
                    }
                    isRequired
                  >
                    <FormLabel fontSize="sm">
                      ?????????? ?????????? ?????????????????????? ?????????????? ???????????? B?? ?????????????????? ??
                      ??????????
                    </FormLabel>
                    <Input
                      className="rmdp-calendar"
                      as={DatePicker}
                      name="vaccinationDates"
                      calendar={jalali}
                      locale={fa}
                      format="YYYY/MM/DD"
                      fontSize={{ base: 12, md: 14 }}
                      {...jalaliDate}
                      onPropsChange={setJalaliDate}
                    />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl
                    isInvalid={
                      !!errors.visitByDentist && touched.visitByDentist
                    }
                    isRequired
                  >
                    <FormLabel fontSize="sm">
                      ?????????? ?????????? ???????? ??????????????????
                    </FormLabel>
                    <Input
                      className="rmdp-calendar"
                      as={DatePicker}
                      name="visitByDentist"
                      calendar={jalali}
                      locale={fa}
                      format="YYYY/MM/DD"
                      fontSize={{ base: 12, md: 14 }}
                      {...jalaliDate}
                      onPropsChange={setJalaliDate}
                    />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl
                    isInvalid={
                      !!errors.visitByOptometrist && touched.visitByOptometrist
                    }
                    isRequired
                  >
                    <FormLabel fontSize="sm">
                      ?????????? ?????????? ???????? ????????????????? (???????? ?????????? ?????????? 65 ?????? ??????????
                      ????????)
                    </FormLabel>
                    <Input
                      className="rmdp-calendar"
                      as={DatePicker}
                      name="visitByOptometrist"
                      calendar={jalali}
                      locale={fa}
                      format="YYYY/MM/DD"
                      fontSize={{ base: 12, md: 14 }}
                      {...jalaliDate}
                      onPropsChange={setJalaliDate}
                    />
                  </FormControl>
                </GridItem>
                <GridItem alignItems="space-between">
                  <FormControl
                    isInvalid={!!errors.gender && touched.gender}
                    isRequired
                  >
                    <FormLabel fontSize="sm">?????????? ???????????? ????????</FormLabel>
                    <Field
                      as={RadioGroup}
                      label="??????????"
                      name="amountOfPhsicalActivity"
                      type="radio"
                      value={state.amountOfPhsicalActivity}
                      onChange={(value) =>
                        setState({ ...state, amountOfPhsicalActivity: value })
                      }
                      variant="outline"
                      fontSize={{ base: 12, md: 14 }}
                    >
                      <Flex gap={4}>
                        <Radio
                          value="???????? ???? ?????? ?????????? ???? ????????"
                          size="sm"
                          colorScheme="teal"
                        >
                          ???????? ???? ?????? ?????????? ???? ????????
                        </Radio>
                        <Radio
                          value="?????????? ???? ?????? ?????????? ???? ????????"
                          size="sm"
                          colorScheme="teal"
                        >
                          ?????????? ???? ?????? ?????????? ???? ????????
                        </Radio>
                      </Flex>
                    </Field>
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl
                    isInvalid={!!errors.drugsTaking && touched.drugsTaking}
                    isRequired
                  >
                    <FormLabel fontSize="sm">?????????????? ?????????? ????????</FormLabel>
                    <Field
                      as={Textarea}
                      label="?????????????? ?????????? ????????"
                      name="drugsTaking"
                      type="text"
                      maxLength={20}
                      variant="outline"
                      fontSize={{ base: 12, md: 14 }}
                    />
                  </FormControl>
                </GridItem>
              </Grid>
              <Flex marginTop={4}>
                <ButtonGroup>
                  {step === 11 ? (
                    <Link to="/forms/results">
                      <Button fontSize={14} colorScheme="blue">
                        ????????
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      fontSize={14}
                      colorScheme="green"
                      onClick={() => dispatch({ type: Actions.NEXT_STEP })}
                      disabled={!isValid}
                    >
                      ????????
                    </Button>
                  )}
                  {step !== 1 ? (
                    <Button
                      fontSize={14}
                      colorScheme="red"
                      onClick={() => dispatch({ type: Actions.PREV_STEP })}
                    >
                      ???????????
                    </Button>
                  ) : (
                    <Link to="/">
                      <Button fontSize={14} colorScheme="red">
                        ???????????? ???? ????????
                      </Button>
                    </Link>
                  )}
                </ButtonGroup>
              </Flex>
            </form>
          )}
        </Formik>
      </Flex>
    </>
  );
};

export default FirstContent;
