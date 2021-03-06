import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import studycases from "./studycases";

import { Layout, Menu } from "antd";

const { Content } = Layout;

const StudyCase = () => {
  let { studyCaseId } = useParams();
  const [currentCase, setCurrentCase] = useState(null);

  useEffect(() => {
    studyCaseId = studyCaseId.replace("-study-case", "");
    setCurrentCase(
      studycases.find((studycase) => studycase.slug === studyCaseId)
    );
  });

  return (
    <Content style={{ padding: "0 24px", minHeight: 280 }}>
      {currentCase && (
        <>
          <h2>
            <FormattedMessage id={`${currentCase.slug}.title`} />
          </h2>
          <p>
            <FormattedMessage id={`${currentCase.slug}.paragraph`} />
          </p>
        </>
      )}
    </Content>
  );
};

export default StudyCase;
