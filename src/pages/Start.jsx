import React, { useEffect, useState } from "react";
import Landing from "components/landing/Landing";
import { useNavigate } from "react-router-dom";

export default function Start() {
  const [showLandingPage, setShowLandingPage] = useState(true);
  const navigation = useNavigate();

  useEffect(() => {
    // 2초 후에 showLandingPage를 false로 업데이트하여 랜딩 페이지를 숨김
    const timer = setTimeout(() => {
      setShowLandingPage(false);
      navigation("/login");
    }, 2000);

    return () => clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머를 정리(cleanup)
  }, [navigation]);

  return showLandingPage && <Landing />;
}
