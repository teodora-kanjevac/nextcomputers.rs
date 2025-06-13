import Handlebars from 'handlebars'

const template = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
<title></title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<!--[if !mso]>-->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!--<![endif]-->
<meta name="x-apple-disable-message-reformatting" content="" />
<meta content="target-densitydpi=device-dpi" name="viewport" />
<meta content="true" name="HandheldFriendly" />
<meta content="width=device-width" name="viewport" />
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
<style type="text/css">
table {
border-collapse: separate;
table-layout: fixed;
mso-table-lspace: 0pt;
mso-table-rspace: 0pt
}
table td {
border-collapse: collapse
}
.ExternalClass {
width: 100%
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height: 100%
}
body, a, li, p, h1, h2, h3 {
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-text-size-adjust: none !important
}
body, #innerTable {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale
}
#innerTable img+div {
display: none;
display: none !important
}
img {
Margin: 0;
padding: 0;
-ms-interpolation-mode: bicubic
}
h1, h2, h3, p, a {
line-height: inherit;
overflow-wrap: normal;
white-space: normal;
word-break: break-word
}
a {
text-decoration: none
}
h1, h2, h3, p {
min-width: 100%!important;
width: 100%!important;
max-width: 100%!important;
display: inline-block!important;
border: 0;
padding: 0;
margin: 0
}
a[x-apple-data-detectors] {
color: inherit !important;
text-decoration: none !important;
font-size: inherit !important;
font-family: inherit !important;
font-weight: inherit !important;
line-height: inherit !important
}
u + #body a {
color: inherit;
text-decoration: none;
font-size: inherit;
font-family: inherit;
font-weight: inherit;
line-height: inherit;
}
a[href^="mailto"],
a[href^="tel"],
a[href^="sms"] {
color: inherit;
text-decoration: none
}
</style>
<style type="text/css">
@media (min-width: 481px) {
.hd { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.hm { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.t103,.t80,.t84,.t98{vertical-align:middle!important}.t71{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t72{padding:30px!important;border-top-left-radius:0!important;border-top-right-radius:0!important}.t25{mso-line-height-alt:25px!important;line-height:25px!important}.t62{text-align:left!important}.t119{padding:15px 30px!important}.t89{padding-bottom:5px!important}.t104,.t85{text-align:center!important}.t78,.t96{display:revert!important}.t80{width:36px!important}.t84{width:16px!important}.t103{width:246px!important}.t98{width:19px!important}.t61{vertical-align:top!important;width:600px!important}
}
</style>
<!--[if !mso]>-->
<link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;700&amp;family=Zen+Kaku+Gothic+New:wght@700&amp;family=Inter:wght@400;700&amp;family=Roboto:wght@400;600&amp;display=swap" rel="stylesheet" type="text/css" />
<!--<![endif]-->
<!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>
<body id="body" class="t125" style="min-width:100%;Margin:0px;padding:0px;background-color:#FFFFFF;"><div class="t124" style="background-color:#FFFFFF;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t123" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#FFFFFF;" valign="top" align="center">
<!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#FFFFFF"/>
</v:background>
<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t71" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t75" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t74" style="width:600px;">
<table class="t73" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t72" style="border:1px solid #DFE1E4;overflow:hidden;background-color:#F8F8F8;padding:36px 42px 32px 42px;border-radius:5px 5px 0 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="left">
<table class="t4" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="80" class="t3" style="width:80px;">
<table class="t2" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t1"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="80" height="80" alt="" src="https://nextcomputers.rs/assets/images/logo.webp"/></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t5" style="mso-line-height-rule:exactly;mso-line-height-alt:35px;line-height:35px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t10" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="514" class="t9" style="width:600px;">
<table class="t8" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t7" style="border-bottom:1px dotted #888888;padding:0 0 12px 0;"><h1 class="t6" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:28px;font-weight:700;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:-1px;direction:ltr;color:#141414;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Promena lozinke</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t11" style="mso-line-height-rule:exactly;mso-line-height-alt:18px;line-height:18px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t16" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="514" class="t15" style="width:600px;">
<table class="t14" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t13"><p class="t12" style="margin:0;Margin:0;font-family:Inter,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:400;font-style:normal;font-size:15px;text-decoration:none;text-transform:none;direction:ltr;color:#141414;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">Poštovani,</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t17" style="mso-line-height-rule:exactly;mso-line-height-alt:15px;line-height:15px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t23" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="514" class="t22" style="width:600px;">
<table class="t21" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t20"><p class="t19" style="margin:0;Margin:0;font-family:Inter,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:400;font-style:normal;font-size:15px;text-decoration:none;text-transform:none;direction:ltr;color:#141414;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">Primili smo zahtev za resetovanje lozinke za Vaš nalog. Ako ste Vi podneli ovaj zahtev, molimo kliknite na dugme ispod kako biste postavili novu lozinku:<span class="t18" style="margin:0;Margin:0;mso-line-height-rule:exactly;"></span></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t25" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t29" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="150" class="t28" style="width:150px;">
<table class="t27" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t26" style="overflow:hidden;background-color:#BA4A66;text-align:center;line-height:34px;mso-line-height-rule:exactly;mso-text-raise:5px;padding:3px 10px 5px 10px;border-radius:8px 8px 8px 8px;"><a class="t24" href="{{resetPasswordLink}}" style="display:block;margin:0;Margin:0;font-family:Zen Kaku Gothic New,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:34px;font-weight:700;font-style:normal;font-size:17px;text-decoration:none;text-transform:none;letter-spacing:-0.2px;direction:ltr;color:#FFFFFF;text-align:center;mso-line-height-rule:exactly;mso-text-raise:5px;" target="_blank">Promeni lozinku</a></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t30" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t37" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="514" class="t36" style="width:600px;">
<table class="t35" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t34"><p class="t33" style="margin:0;Margin:0;font-family:Inter,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:15px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Iz bezbednosnih razloga, <span class="t31" style="margin:0;Margin:0;font-weight:400;mso-line-height-rule:exactly;">link će biti aktivan </span><span class="t32" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">30 minuta</span>. Nakon isteka tog roka, biće potrebno da podnesete novi zahtev za resetovanje lozinke.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t39" style="mso-line-height-rule:exactly;mso-line-height-alt:15px;line-height:15px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t43" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="514" class="t42" style="width:600px;">
<table class="t41" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t40"><p class="t38" style="margin:0;Margin:0;font-family:Inter,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:15px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Ukoliko niste zahtevali promenu lozinke, molimo Vas da ignorišete ovaj email — Vaša lozinka ostaje nepromenjena dok ne kreirate novu putem linka.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t44" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t50" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="514" class="t49" style="width:600px;">
<table class="t48" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t47"><p class="t46" style="margin:0;Margin:0;font-family:Inter,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:20px;font-weight:400;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Ukoliko imate problema sa promenom lozinke, kontaktirajte nas na <span class="t45" style="margin:0;Margin:0;line-height:20px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;direction:ltr;color:#BA4A66;mso-line-height-rule:exactly;mso-text-raise:2px;">prodaja.nextcomputers@gmail.com</span>.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t51" style="mso-line-height-rule:exactly;mso-line-height-alt:25px;line-height:25px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t56" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="514" class="t55" style="width:600px;">
<table class="t54" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t53"><p class="t52" style="margin:0;Margin:0;font-family:Inter,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:15px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Hvala Vam na poverenju!</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t66" style="mso-line-height-rule:exactly;mso-line-height-alt:15px;line-height:15px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t70" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="514" class="t69" style="width:600px;">
<table class="t68" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t67" style="border-top:1px solid #DFE1E4;padding:12px 0 0 0;"><div class="t65" style="width:100%;text-align:left;"><div class="t64" style="display:inline-block;"><table class="t63" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t62"><td></td><td class="t61" width="514" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t60" style="width:100%;"><tr><td class="t59"><p class="t58" style="margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Vaš <span class="t57" style="margin:0;Margin:0;font-weight:600;font-style:normal;font-size:14px;text-decoration:none;direction:ltr;color:#333333;mso-line-height-rule:exactly;">nextcomputers.rs</span></p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t122" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t121" style="width:600px;">
<table class="t120" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t119" style="background-color:#242424;padding:20px 50px 20px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t92" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t91" style="width:800px;">
<table class="t90" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t89" style="padding:10px 0 10px 0;"><div class="t88" style="width:100%;text-align:center;"><div class="t87" style="display:inline-block;"><table class="t86" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="middle">
<tr class="t85"><td></td><td class="t80" width="36" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t79" style="width:100%;"><tr><td class="t77"><a href="https://www.instagram.com/nextcomputers.rs/" style="font-size:0px;" target="_blank"><img class="t76" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="16" height="16" alt="" src="https://2abfdd79-6ec9-4ab5-b39d-5a79d719d1d4.b-cdn.net/e/84414d69-2a00-46af-8ff4-c5daf869fd3f/f68319bc-49dc-478f-a759-50f0bd52cbfa.png"/></a></td><td class="t78" style="width:20px;" width="20"></td></tr></table>
</td><td class="t84" width="16" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t83" style="width:100%;"><tr><td class="t82"><div style="font-size:0px;"><img class="t81" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="16" height="16" alt="linkedin" src="https://2abfdd79-6ec9-4ab5-b39d-5a79d719d1d4.b-cdn.net/e/84414d69-2a00-46af-8ff4-c5daf869fd3f/159c9cc5-5142-475b-a9f8-ba61accf01fa.png"/></div></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t93" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t111" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t110" style="width:600px;">
<table class="t109" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t108"><div class="t107" style="width:100%;text-align:center;"><div class="t106" style="display:inline-block;"><table class="t105" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="middle">
<tr class="t104"><td></td><td class="t98" width="19" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t97" style="width:100%;"><tr><td class="t95"><div style="font-size:0px;"><img class="t94" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="14" height="14" alt="copyright" src="https://2abfdd79-6ec9-4ab5-b39d-5a79d719d1d4.b-cdn.net/e/84414d69-2a00-46af-8ff4-c5daf869fd3f/bbb02091-f087-457a-97fd-068e99c2dd71.png"/></div></td><td class="t96" style="width:5px;" width="5"></td></tr></table>
</td><td class="t103" width="246" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t102" style="width:100%;"><tr><td class="t101"><p class="t100" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#F8F8F8;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">2025 <a class="t99" href="https://nextcomputers.rs/" style="margin:0;Margin:0;font-weight:500;font-style:normal;text-decoration:none;direction:ltr;color:#F8F8F8;mso-line-height-rule:exactly;" target="_blank">nextcomputers.rs</a>. Sva prava zadržana.</p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t114" style="mso-line-height-rule:exactly;mso-line-height-alt:5px;line-height:5px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t118" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t117" style="width:600px;">
<table class="t116" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t115"><p class="t113" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;"><span class="t112" style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;">nextcomputers.rs</span></p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
</html>`

export const reserPasswordTemplate = Handlebars.compile(template)
