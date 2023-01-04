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
                    <FormLabel fontSize="sm">نام</FormLabel>
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
                    <FormLabel fontSize="sm">نام خانوادگی</FormLabel>
                    <Field
                      as={Input}
                      label="نام خانوادگی"
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
                    <FormLabel fontSize="sm">نام پدر</FormLabel>
                    <Field
                      as={Input}
                      label="نام پدر"
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
                    <FormLabel fontSize="sm">کد‌ملی</FormLabel>
                    <Field
                      as={Input}
                      label="کد‌ملی"
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
                    <FormLabel fontSize="sm">جنسیت</FormLabel>
                    <Field
                      as={RadioGroup}
                      label="جنسیت"
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
                        <Radio value="مرد" size="sm" colorScheme="teal">
                          مرد
                        </Radio>
                        <Radio value="زن" size="sm" colorScheme="teal">
                          زن
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
                    <FormLabel fontSize="sm">تاریخ تولد</FormLabel>
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
                    <FormLabel fontSize="sm">محل تولد</FormLabel>
                    <Field
                      as={Select}
                      label="محل تولد"
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
                    <FormLabel fontSize="sm">وضعیت تاهل</FormLabel>
                    <Field
                      as={Input}
                      label="وضعیت تاهل"
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
                    <FormLabel fontSize="sm">تعداد فرزندان</FormLabel>
                    <Field
                      as={Input}
                      label="تعداد فرزندان"
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
                    <FormLabel fontSize="sm">تحصیلات</FormLabel>
                    <Field
                      as={Input}
                      label="تحصیلات"
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
                    <FormLabel fontSize="sm">شغل</FormLabel>
                    <Field
                      as={Input}
                      label="شغل"
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
                    <FormLabel fontSize="sm">تلفن ثابت</FormLabel>
                    <Field
                      as={Input}
                      label="تلفن ثابت"
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
                    <FormLabel fontSize="sm">تلفن همراه</FormLabel>
                    <Field
                      as={Input}
                      label="تلفن همراه"
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
                    <FormLabel fontSize="sm">دور کمر به سانتیمتر</FormLabel>
                    <Field
                      as={Input}
                      label="دور کمر به سانتیمتر"
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
                    <FormLabel fontSize="sm">وزن فعلی به کیلوگرم</FormLabel>
                    <Field
                      as={Input}
                      label="وزن فعلی به کیلوگرم"
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
                    <FormLabel fontSize="sm">قد به سانتیمتر</FormLabel>
                    <Field
                      as={Input}
                      label="قد به سانتیمتر"
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
                    <FormLabel fontSize="sm">نمایه توده‌بدنی BMI</FormLabel>
                    <Field
                      as={Input}
                      label="نمایه توده‌بدنی BMI"
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
                    <FormLabel fontSize="sm">فشارخون Sys(mmHg)</FormLabel>
                    <Field
                      as={Input}
                      label="فشارخون Sys(mmHg)"
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
                    <FormLabel fontSize="sm">فشارخون Dia(mmHg)</FormLabel>
                    <Field
                      as={Input}
                      label="فشارخون Dia(mmHg)"
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
                    <FormLabel fontSize="sm">تعداد نبض PR</FormLabel>
                    <Field
                      as={Input}
                      label="تعداد نبض PR"
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
                      تاریخ انجام واکسیناسیون دوگانه، هپاتیت B، آنفولانزا و
                      کرونا
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
                      تاریخ ویزیت توسط دندانپزشک
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
                      تاریخ ویزیت توسط چشم‌پزشک (توسط افراد بالای 65 سال تکمیل
                      گردد)
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
                    <FormLabel fontSize="sm">میزان فعالیت بدنی</FormLabel>
                    <Field
                      as={RadioGroup}
                      label="جنسیت"
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
                          value="کمتر از ۱۵۰ دقیقه در هفته"
                          size="sm"
                          colorScheme="teal"
                        >
                          کمتر از ۱۵۰ دقیقه در هفته
                        </Radio>
                        <Radio
                          value="بیشتر از ۱۵۰ دقیقه در هفته"
                          size="sm"
                          colorScheme="teal"
                        >
                          بیشتر از ۱۵۰ دقیقه در هفته
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
                    <FormLabel fontSize="sm">داروهای درحال مصرف</FormLabel>
                    <Field
                      as={Textarea}
                      label="داروهای درحال مصرف"
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
                        تمام
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      fontSize={14}
                      colorScheme="green"
                      onClick={() => dispatch({ type: Actions.NEXT_STEP })}
                      disabled={!isValid}
                    >
                      بعدی
                    </Button>
                  )}
                  {step !== 1 ? (
                    <Button
                      fontSize={14}
                      colorScheme="red"
                      onClick={() => dispatch({ type: Actions.PREV_STEP })}
                    >
                      قبلی‌
                    </Button>
                  ) : (
                    <Link to="/">
                      <Button fontSize={14} colorScheme="red">
                        بازگشت به خانه
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
