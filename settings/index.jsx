function mySettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Yoda-Quotes</Text>}>
        <Link source="mailto:princessleia1@mail.com">
          <TextImageRow
            label="Email"
            sublabel="princessleia1@mail.com"
            icon="https://github.com/princessleia1/yoda-quotes/blob/master/resources/email-icon.png?raw=true"
          />
        </Link>
         <Link source="https://github.com/princessleia1">
           <TextImageRow
             label="Github"
             sublabel="https://github.com/princessleia1"
             icon="https://github.com/princessleia1/yoda-quotes/blob/master/resources/git-icon.png?raw=true"
           />
          </Link>
        <Link source="https://www.paypal.me/KirsteneG">
          <TextImageRow
            label="PayPal"
            sublabel="paypal.me/KirsteneG"
            icon="https://github.com/princessleia1/yoda-quotes/blob/master/resources/pay-icon.png?raw=true"
           />
        </Link>
      </Section>
      <Section
        title={<Text bold align="center">Build Version</Text>}>
        <Text>
          V1.0.3 - Update SDK V4.2 Fitbit Ionic, Fitbit Versa 2, Fitbit Versa, Fitbit Versa Lite.
        </Text>
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
