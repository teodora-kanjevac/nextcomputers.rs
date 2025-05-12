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
.t102,.t79,.t83,.t97{vertical-align:middle!important}.t70{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t71{padding:30px!important;border-top-left-radius:0!important;border-top-right-radius:0!important}.t61{text-align:left!important}.t118{padding:15px 30px!important}.t88{padding-bottom:5px!important}.t103,.t84{text-align:center!important}.t77,.t95{display:revert!important}.t79{width:36px!important}.t83{width:16px!important}.t102{width:246px!important}.t97{width:19px!important}.t60{vertical-align:top!important;width:600px!important}
}
</style>
<!--[if !mso]>-->
<link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;700&amp;family=Zen+Kaku+Gothic+New:wght@700&amp;family=Inter:wght@400;600;700&amp;family=Roboto:wght@400;600&amp;display=swap" rel="stylesheet" type="text/css" />
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
<body id="body" class="t124" style="min-width:100%;Margin:0px;padding:0px;background-color:#FFFFFF;"><div class="t123" style="background-color:#FFFFFF;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t122" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#FFFFFF;" valign="top" align="center">
<!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#FFFFFF"/>
</v:background>
<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t70" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t74" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t73" style="width:600px;">
<table class="t72" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t71" style="border:1px solid #DFE1E4;overflow:hidden;background-color:#F8F8F8;padding:36px 42px 32px 42px;border-radius:5px 5px 0 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="left">
<table class="t4" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="80" class="t3" style="width:80px;">
<table class="t2" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t1"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="80" height="80" alt="" src="https://nextcomputers.rs/assets/images/logo.webp"/></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t5" style="mso-line-height-rule:exactly;mso-line-height-alt:35px;line-height:35px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t10" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="514" class="t9" style="width:600px;">
<table class="t8" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t7" style="border-bottom:1px dotted #888888;padding:0 0 12px 0;"><h1 class="t6" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:28px;font-weight:700;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:-1px;direction:ltr;color:#141414;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Potvrda registracije</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t11" style="mso-line-height-rule:exactly;mso-line-height-alt:18px;line-height:18px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t17" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="514" class="t16" style="width:600px;">
<table class="t15" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t14"><p class="t13" style="margin:0;Margin:0;font-family:Inter,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:400;font-style:normal;font-size:15px;text-decoration:none;text-transform:none;direction:ltr;color:#141414;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">Poštovani/a <span class="t12" style="margin:0;Margin:0;mso-line-height-rule:exactly;">{{userFullName}}</span></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t18" style="mso-line-height-rule:exactly;mso-line-height-alt:15px;line-height:15px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t24" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="514" class="t23" style="width:600px;">
<table class="t22" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t21"><p class="t20" style="margin:0;Margin:0;font-family:Inter,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:400;font-style:normal;font-size:15px;text-decoration:none;text-transform:none;direction:ltr;color:#141414;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">Hvala Vam što ste se registrovali na <span class="t19" style="margin:0;Margin:0;font-weight:600;mso-line-height-rule:exactly;">nextcomputers.rs</span>! Da biste završili proces registracije, molimo Vas da potvrdite svoju email adresu klikom na dugme ispod:</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t26" style="mso-line-height-rule:exactly;mso-line-height-alt:26px;line-height:26px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t30" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="150" class="t29" style="width:150px;">
<table class="t28" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t27" style="overflow:hidden;background-color:#BA4A66;text-align:center;line-height:34px;mso-line-height-rule:exactly;mso-text-raise:5px;padding:5px 15px 7px 15px;border-radius:10px 10px 10px 10px;"><a class="t25" href="{{registrationLink}}" style="display:block;margin:0;Margin:0;font-family:Zen Kaku Gothic New,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:34px;font-weight:700;font-style:normal;font-size:17px;text-decoration:none;text-transform:none;letter-spacing:-0.2px;direction:ltr;color:#FFFFFF;text-align:center;mso-line-height-rule:exactly;mso-text-raise:5px;" target="_blank">Verifikuj nalog</a></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t31" style="mso-line-height-rule:exactly;mso-line-height-alt:26px;line-height:26px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t36" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="514" class="t35" style="width:600px;">
<table class="t34" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t33"><p class="t32" style="margin:0;Margin:0;font-family:Inter,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:15px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Link će biti aktivan narednih 24 sata.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t38" style="mso-line-height-rule:exactly;mso-line-height-alt:15px;line-height:15px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t42" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="514" class="t41" style="width:600px;">
<table class="t40" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t39"><p class="t37" style="margin:0;Margin:0;font-family:Inter,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:15px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Ako niste zatražili registraciju, ignorišite ovaj email.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t43" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t49" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="514" class="t48" style="width:600px;">
<table class="t47" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t46"><p class="t45" style="margin:0;Margin:0;font-family:Inter,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:20px;font-weight:400;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Ukoliko imate problema sa registracijom, kontaktirajte nas na <span class="t44" style="margin:0;Margin:0;line-height:20px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;direction:ltr;color:#BA4A66;mso-line-height-rule:exactly;mso-text-raise:2px;">prodaja.nextcomputers@gmail.com</span>.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t50" style="mso-line-height-rule:exactly;mso-line-height-alt:25px;line-height:25px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t55" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="514" class="t54" style="width:600px;">
<table class="t53" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t52"><p class="t51" style="margin:0;Margin:0;font-family:Inter,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:15px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Hvala Vam na poverenju!</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t65" style="mso-line-height-rule:exactly;mso-line-height-alt:15px;line-height:15px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t69" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="514" class="t68" style="width:600px;">
<table class="t67" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t66" style="border-top:1px solid #DFE1E4;padding:12px 0 0 0;"><div class="t64" style="width:100%;text-align:left;"><div class="t63" style="display:inline-block;"><table class="t62" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t61"><td></td><td class="t60" width="514" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t59" style="width:100%;"><tr><td class="t58"><p class="t57" style="margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Vaš <span class="t56" style="margin:0;Margin:0;font-weight:600;font-style:normal;font-size:14px;text-decoration:none;direction:ltr;color:#333333;mso-line-height-rule:exactly;">nextcomputers.rs</span></p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t121" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t120" style="width:600px;">
<table class="t119" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t118" style="background-color:#242424;padding:20px 50px 20px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t91" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t90" style="width:800px;">
<table class="t89" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t88" style="padding:10px 0 10px 0;"><div class="t87" style="width:100%;text-align:center;"><div class="t86" style="display:inline-block;"><table class="t85" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="middle">
<tr class="t84"><td></td><td class="t79" width="36" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t78" style="width:100%;"><tr><td class="t76"><a href="https://www.instagram.com/nextcomputers.rs/" style="font-size:0px;" target="_blank"><img class="t75" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="16" height="16" alt="" src="https://2abfdd79-6ec9-4ab5-b39d-5a79d719d1d4.b-cdn.net/e/84414d69-2a00-46af-8ff4-c5daf869fd3f/f68319bc-49dc-478f-a759-50f0bd52cbfa.png"/></a></td><td class="t77" style="width:20px;" width="20"></td></tr></table>
</td><td class="t83" width="16" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t82" style="width:100%;"><tr><td class="t81"><div style="font-size:0px;"><img class="t80" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="16" height="16" alt="linkedin" src="https://2abfdd79-6ec9-4ab5-b39d-5a79d719d1d4.b-cdn.net/e/84414d69-2a00-46af-8ff4-c5daf869fd3f/159c9cc5-5142-475b-a9f8-ba61accf01fa.png"/></div></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t92" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t110" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t109" style="width:600px;">
<table class="t108" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t107"><div class="t106" style="width:100%;text-align:center;"><div class="t105" style="display:inline-block;"><table class="t104" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="middle">
<tr class="t103"><td></td><td class="t97" width="19" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t96" style="width:100%;"><tr><td class="t94"><div style="font-size:0px;"><img class="t93" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="14" height="14" alt="copyright" src="https://2abfdd79-6ec9-4ab5-b39d-5a79d719d1d4.b-cdn.net/e/84414d69-2a00-46af-8ff4-c5daf869fd3f/bbb02091-f087-457a-97fd-068e99c2dd71.png"/></div></td><td class="t95" style="width:5px;" width="5"></td></tr></table>
</td><td class="t102" width="246" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t101" style="width:100%;"><tr><td class="t100"><p class="t99" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#F8F8F8;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">2025 <a class="t98" href="https://nextcomputers.rs/" style="margin:0;Margin:0;font-weight:500;font-style:normal;text-decoration:none;direction:ltr;color:#F8F8F8;mso-line-height-rule:exactly;" target="_blank">nextcomputers.rs</a>. Sva prava zadržana.</p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t113" style="mso-line-height-rule:exactly;mso-line-height-alt:5px;line-height:5px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t117" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t116" style="width:600px;">
<table class="t115" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t114"><p class="t112" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;"><span class="t111" style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;">nextcomputers.rs</span></p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
</html>`

export const verificationEmailTemplate = Handlebars.compile(template)