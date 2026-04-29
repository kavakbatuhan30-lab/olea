@echo off
chcp 65001 >nul
title Olea - Masada Siparis Demosu
cd /d "%~dp0"

echo.
echo ============================================================
echo   Olea - Masada Siparis Demosu
echo ============================================================
echo.

REM Python'u bul - py launcher tercih et, yoksa python
set PY_CMD=
where py >nul 2>nul
if not errorlevel 1 (
  set PY_CMD=py -3
  goto :found
)
where python >nul 2>nul
if not errorlevel 1 (
  set PY_CMD=python
  goto :found
)

echo  HATA: Python bulunamadi.
echo.
echo  Cozum:
echo  1) https://www.python.org/downloads/ adresinden Python 3 yukle
echo  2) Yuklerken "Add Python to PATH" kutucugunu MUTLAKA isaretle
echo  3) Bu dosyayi yeniden cift tikla
echo.
echo  Devam etmek icin bir tusa bas...
pause >nul
exit /b 1

:found
echo  Python bulundu: %PY_CMD%
echo.
echo  Sunucu baslatiliyor: http://localhost:8765
echo.
echo  ----- DEMO LINKLERI -----
echo  Musteri menusu : http://localhost:8765/?masa=5
echo  Personel panel : http://localhost:8765/admin.html
echo  -------------------------
echo.
echo  3 saniye sonra tarayici acilacak.
echo  Sunucuyu durdurmak icin: Ctrl+C ya da bu pencereyi kapat.
echo ============================================================
echo.

REM Port 8765 dolu mu kontrol et
netstat -ano | findstr ":8765 " | findstr "LISTENING" >nul 2>nul
if not errorlevel 1 (
  echo  UYARI: Port 8765 zaten kullanimda olabilir.
  echo  Bu cogunlukla onceki bir Python sunucusudur.
  echo.
  echo  Ne yapmak istiyorsun?
  echo    1^) Devam et ^(zaten calisiyorsa tarayici acilir^)
  echo    2^) Cikis yap, manuel halledeyim
  echo.
  set /p choice="Sec [1/2]: "
  if "%choice%"=="2" exit /b 0
  echo.
  REM Tarayicilari ac, sunucu zaten varsa cevap verir
  start http://localhost:8765/admin.html
  timeout /t 1 /nobreak >nul
  start "" "http://localhost:8765/?masa=5"
  echo  Tarayici acildi. Bu pencereyi kapatabilirsin.
  echo.
  pause
  exit /b 0
)

REM 3 saniye sonra arka planda tarayicilari ac
start "" /min cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:8765/admin.html && timeout /t 1 /nobreak >nul && start \"\" \"http://localhost:8765/?masa=5\""

REM Sunucu (Ctrl+C veya pencere kapatilana kadar calisir)
%PY_CMD% -m http.server 8765

REM Buraya geldiyse python ya bitti ya hata verdi
echo.
echo ============================================================
echo  Sunucu durdu.
echo  Eger hizla kapandiysa: Python "Microsoft Store" stub'i
echo  olabilir. Gercek Python yuklemen gerek:
echo  https://www.python.org/downloads/
echo ============================================================
pause
