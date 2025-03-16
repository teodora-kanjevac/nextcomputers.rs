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
.t102,.t115,.t119,.t26,.t30,.t44,.t48,.t96{vertical-align:middle!important}.t139,.t5{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t8{border-top-left-radius:0!important;border-top-right-radius:0!important}.t15{mso-line-height-alt:25px!important;line-height:25px!important}.t10{font-size:22px!important;mso-text-raise:1px!important}.t135{padding-left:20px!important;padding-right:20px!important}.t137{border-bottom-right-radius:0!important;border-bottom-left-radius:0!important}.t103,.t120,.t31,.t34,.t49,.t52{text-align:center!important}.t100,.t92,.t94,.t98{display:revert!important}.t102,.t96{width:36px!important}.t119{width:270px!important}.t115{width:14px!important}.t57{padding-bottom:30px!important}.t59{border-radius:0!important}.t21{mso-line-height-alt:10px!important;line-height:10px!important}.t39{mso-line-height-alt:5px!important;line-height:5px!important;display:block!important}.t24,.t42{width:10px!important;display:revert!important}.t26,.t44{width:240px!important}.t22,.t40{font-weight:500!important}.t30,.t48{width:600px!important}
}
</style>
<!--[if !mso]>-->
<link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet" type="text/css" />
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
<body id="body" class="t142" style="min-width:100%;Margin:0px;padding:0px;background-color:#FFFFFF;"><div class="t141" style="background-color:#FFFFFF;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t140" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#FFFFFF;" valign="top" align="center">
<!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#FFFFFF"/>
</v:background>
<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t5" style="mso-line-height-rule:exactly;mso-line-height-alt:50px;line-height:50px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t9" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="600" class="t8" style="background-color:#1F2937;overflow:hidden;width:600px;border-radius:14px 14px 0 0;">
<![endif]-->
<!--[if !mso]>-->
<td class="t8" style="background-color:#1F2937;overflow:hidden;width:600px;border-radius:14px 14px 0 0;">
<!--<![endif]-->
<table class="t7" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t6" style="padding:20px 0 20px 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t4" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="90" class="t3" style="overflow:hidden;width:90px;border-radius:14px 14px 14px 14px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t3" style="overflow:hidden;width:90px;border-radius:14px 14px 14px 14px;">
<!--<![endif]-->
<table class="t2" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t1"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="90" height="90" alt="" src="https://nextcomputers.rs/assets/images/logo.webp"/></div></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t90" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="600" class="t89" style="background-color:#F8F8F8;width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t89" style="background-color:#F8F8F8;width:600px;">
<!--<![endif]-->
<table class="t88" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t87" style="padding:40px 30px 30px 30px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t14" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="540" class="t13" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t13" style="width:600px;">
<!--<![endif]-->
<table class="t12" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t11"><p class="t10" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:400;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;direction:ltr;color:#111111;text-align:left;mso-line-height-rule:exactly;">Zdravo nextcomputers.rs,</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t15" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t60" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="540" class="t59" style="overflow:hidden;width:540px;border-radius:12px 12px 12px 12px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t59" style="overflow:hidden;width:540px;border-radius:12px 12px 12px 12px;">
<!--<![endif]-->
<table class="t58" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t57" style="padding:0 0 35px 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t20" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="540" class="t19" style="border-bottom:1px dotted #888888;width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t19" style="border-bottom:1px dotted #888888;width:600px;">
<!--<![endif]-->
<table class="t18" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t17" style="padding:0 0 5px 0;"><p class="t16" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#111111;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Imate poruku od</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t21" style="mso-line-height-rule:exactly;mso-line-height-alt:15px;line-height:15px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t38" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="540" class="t37" style="width:800px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t37" style="width:800px;">
<!--<![endif]-->
<table class="t36" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t35"><div class="t34" style="width:100%;text-align:left;"><div class="t33" style="display:inline-block;"><table class="t32" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t31"><td></td><td class="t26" width="113.68421" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t25" style="width:100%;"><tr><td class="t23"><p class="t22" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:600;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Ime i prezime:</p></td><td class="t24" style="display:none;"></td></tr></table>
</td><td class="t30" width="426.31579" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t29" style="width:100%;"><tr><td class="t28"><p class="t27" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#787878;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{fullname}}</p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr>
<!--[if !mso]>-->
<tr><td><div class="t39" style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;&nbsp;</div></td></tr>
<!--<![endif]-->
<tr><td align="center">
<table class="t56" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="540" class="t55" style="width:800px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t55" style="width:800px;">
<!--<![endif]-->
<table class="t54" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t53"><div class="t52" style="width:100%;text-align:left;"><div class="t51" style="display:inline-block;"><table class="t50" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t49"><td></td><td class="t44" width="113.68421" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t43" style="width:100%;"><tr><td class="t41"><p class="t40" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:600;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Email:</p></td><td class="t42" style="display:none;"></td></tr></table>
</td><td class="t48" width="426.31579" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t47" style="width:100%;"><tr><td class="t46"><p class="t45" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#787878;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{email}}</p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t65" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="540" class="t64" style="border-bottom:1px dotted #E0E0E0;width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t64" style="border-bottom:1px dotted #E0E0E0;width:600px;">
<!--<![endif]-->
<table class="t63" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t62" style="padding:0 0 5px 0;"><p class="t61" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#111111;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{fullname}} kaže:</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t66" style="mso-line-height-rule:exactly;mso-line-height-alt:15px;line-height:15px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t71" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="540" class="t70" style="background-color:#FFFFFF;border:2px dotted #D9D9D9;overflow:hidden;width:550px;border-radius:14px 14px 14px 14px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t70" style="background-color:#FFFFFF;border:2px dotted #D9D9D9;overflow:hidden;width:550px;border-radius:14px 14px 14px 14px;">
<!--<![endif]-->
<table class="t69" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t68" style="padding:20px 20px 20px 20px;"><p class="t67" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:400;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;direction:ltr;color:#111111;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">{{comment}}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t72" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td><div class="t74" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t78" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="200" class="t77" style="background-color:#BA4A66;overflow:hidden;width:200px;border-radius:10px 10px 10px 10px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t77" style="background-color:#BA4A66;overflow:hidden;width:200px;border-radius:10px 10px 10px 10px;">
<!--<![endif]-->
<table class="t76" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t75" style="text-align:center;line-height:24px;mso-line-height-rule:exactly;mso-text-raise:2px;padding:10px 10px 10px 10px;"><a class="t73" href="mailto:{{email}}" style="display:block;margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:700;font-style:normal;font-size:16px;text-decoration:none;direction:ltr;color:#FFFFFF;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;" target="_blank">Odgovori na poruku</a></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t79" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td><div class="t82" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t86" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="540" class="t85" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t85" style="width:600px;">
<!--<![endif]-->
<table class="t84" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t83"><p class="t81" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:400;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;direction:ltr;color:#111111;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">Hvala Vam što koristite usluge <span class="t80" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">nextcomputers.rs</span></p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t138" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="600" class="t137" style="background-color:#242424;overflow:hidden;width:600px;border-radius:0 0 14px 14px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t137" style="background-color:#242424;overflow:hidden;width:600px;border-radius:0 0 14px 14px;">
<!--<![endif]-->
<table class="t136" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t135" style="padding:20px 50px 20px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t110" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="100" class="t109" style="width:100px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t109" style="width:100px;">
<!--<![endif]-->
<table class="t108" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t107" style="padding:10px 0 10px 0;"><div class="t106" style="width:100%;text-align:center;"><div class="t105" style="display:inline-block;"><table class="t104" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="middle">
<tr class="t103"><td></td><td class="t96" width="36" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t95" style="width:100%;"><tr><td class="t92" style="width:10px;" width="10"></td><td class="t93"><a href="https://www.instagram.com/nextcomputers.rs/" style="font-size:0px;" target="_blank"><img class="t91" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="16" height="16" alt="" src="https://a5ea81a5-d243-4a11-a7fd-c428ae4708a3.b-cdn.net/e/045c94e1-7dc9-4dae-9d77-9e583fa92a91/a7045750-e160-4834-93f5-23a8849da632.png"/></a></td><td class="t94" style="width:10px;" width="10"></td></tr></table>
</td><td class="t102" width="36" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t101" style="width:100%;"><tr><td class="t98" style="width:10px;" width="10"></td><td class="t99"><a href="https://www.linkedin.com/company/nextcomputers" style="font-size:0px;" target="_blank"><img class="t97" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="16" height="16" alt="" src="https://a5ea81a5-d243-4a11-a7fd-c428ae4708a3.b-cdn.net/e/045c94e1-7dc9-4dae-9d77-9e583fa92a91/5658dcd9-4327-47c2-ae2d-40b4409c36d6.png"/></a></td><td class="t100" style="width:10px;" width="10"></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t111" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td>
<table class="t127" role="presentation" cellpadding="0" cellspacing="0"><tr>
<!--[if mso]>
<td width="500" class="t126" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t126" style="width:600px;">
<!--<![endif]-->
<table class="t125" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t124"><div class="t123" style="width:100%;text-align:center;"><div class="t122" style="display:inline-block;"><table class="t121" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="middle">
<tr class="t120"><td></td><td class="t115" width="14" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t114" style="width:100%;"><tr><td class="t113"><div style="font-size:0px;"><img class="t112" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="14" height="14" alt="" src="https://a5ea81a5-d243-4a11-a7fd-c428ae4708a3.b-cdn.net/e/045c94e1-7dc9-4dae-9d77-9e583fa92a91/92729dff-c216-4d3c-bbf5-36d95f9592ef.png"/></div></td></tr></table>
</td><td class="t119" width="260" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t118" style="width:100%;"><tr><td class="t117"><p class="t116" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:400;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#F8F8F8;text-align:center;mso-line-height-rule:exactly;mso-text-raise:4px;">2025 nextcomputers.rs. Sva prava zadržana.</p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t130" style="mso-line-height-rule:exactly;mso-line-height-alt:5px;line-height:5px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="left">
<table class="t134" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr>
<!--[if mso]>
<td width="500" class="t133" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t133" style="width:600px;">
<!--<![endif]-->
<table class="t132" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t131"><p class="t129" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:400;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:4px;"><a class="t128" href="https://nextcomputers.rs" style="margin:0;Margin:0;font-weight:700;font-style:normal;font-size:12px;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;" target="_blank">nextcomputers.rs</a></p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t139" style="mso-line-height-rule:exactly;mso-line-height-alt:50px;line-height:50px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
</html>
`

export const contactTemplate = Handlebars.compile(template)
