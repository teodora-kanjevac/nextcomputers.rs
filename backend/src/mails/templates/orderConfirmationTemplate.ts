import Handlebars from 'handlebars'

const orderConfirmationTemplate = `
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
.t249{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t250{padding-left:30px!important;padding-right:30px!important}.t252,.t306{width:480px!important}.t7{padding-bottom:20px!important}.t15,.t157,.t22,.t229,.t239,.t247,.t28,.t295,.t302,.t35,.t41,.t47,.t9{width:420px!important}.t5{line-height:28px!important;font-size:26px!important;letter-spacing:-1.04px!important}.t304{padding:40px 30px!important}.t276{padding-bottom:36px!important}.t272,.t289{text-align:center!important}.t146,.t168,.t185,.t202,.t218,.t78{text-align:left!important}.t255,.t257,.t261,.t263,.t267,.t269,.t51,.t53,.t73,.t75{display:revert!important}.t125,.t144,.t146,.t147{display:block!important}.t259,.t265,.t271{vertical-align:top!important;width:36px!important}.t284,.t288{vertical-align:middle!important}.t1{padding-bottom:50px!important}.t3{width:80px!important}.t288{width:229px!important}.t284{width:14px!important}.t227{padding-top:30px!important;padding-bottom:30px!important}.t152,.t174,.t191,.t208,.t224,.t84{width:360px!important}.t162,.t167,.t179,.t184,.t196,.t201,.t213{vertical-align:top!important;width:600px!important}.t217{vertical-align:top!important;width:681px!important}.t55,.t77{vertical-align:middle!important}.t55{width:221px!important}.t77{width:820px!important}.t57,.t69{padding-left:0!important}.t59,.t65,.t71{width:271.73px!important}.t125,.t144{mso-line-height-alt:15px!important;line-height:15px!important}.t126,.t145{vertical-align:top!important;display:inline-block!important}.t126{width:100%!important;max-width:900px!important}.t123,.t142{padding-bottom:15px!important;padding-right:0!important}.t121{width:798px!important}.t102,.t107,.t112,.t117,.t130,.t136,.t90,.t96{width:600px!important}.t145{width:100%!important;max-width:800px!important}.t140{width:670px!important}
}
</style>
<!--[if !mso]>-->
<link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600;700&amp;family=Inter+Tight:wght@500;700;800&amp;display=swap" rel="stylesheet" type="text/css" />
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
<body id="body" class="t310" style="min-width:100%;Margin:0px;padding:0px;background-color:#FFFFFF;"><div class="t309" style="background-color:#FFFFFF;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t308" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#FFFFFF;" valign="top" align="center">
<!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#FFFFFF"/>
</v:background>
<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t249" style="mso-line-height-rule:exactly;mso-line-height-alt:45px;line-height:45px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t253" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="700" class="t252" style="background-color:#F8F8F8;width:700px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t252" style="background-color:#F8F8F8;width:700px;">
<!--<![endif]-->
<table class="t251" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t250" style="padding:0 50px 40px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="left">
<table class="t4" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="130" class="t3" style="width:130px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t3" style="width:130px;">
<!--<![endif]-->
<table class="t2" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t1" style="padding:0 0 60px 0;"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="130" height="130" alt="" src="https://152dc0dc-08a0-4a85-a8b7-0808d7f6ef7e.b-cdn.net/e/8e3eee7d-c53d-49d6-b4ba-c46cbcba1f26/e6888ea7-4fe5-4939-a9a9-53548d969ce0.png"/></div></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td><div class="t6" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t10" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="600" class="t9" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t9" style="width:600px;">
<!--<![endif]-->
<table class="t8" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t7" style="padding:0 0 15px 0;"><h1 class="t5" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:600;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#191919;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Pozdrav {{customerFullname}},</h1></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td><div class="t12" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t16" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="600" class="t15" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t15" style="width:600px;">
<!--<![endif]-->
<table class="t14" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t13" style="padding:0 0 22px 0;"><p class="t11" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Hvala Vam na kupovini! Sa zadovoljstvom vas obaveštavamo da smo primili Vašu porudžbinu i da je trenutno u obradi. U nastavku su detalji o vašoj kupovini:</p></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td><div class="t19" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t23" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="600" class="t22" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t22" style="width:600px;">
<!--<![endif]-->
<table class="t21" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t20"><p class="t18" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t17" style="margin:0;Margin:0;font-weight:bold;mso-line-height-rule:exactly;">Broj narudžbine:</span></p></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td><div class="t25" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t29" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="600" class="t28" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t28" style="width:600px;">
<!--<![endif]-->
<table class="t27" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t26" style="padding:0 0 22px 0;"><p class="t24" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{orderId}}</p></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td><div class="t32" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t36" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="600" class="t35" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t35" style="width:600px;">
<!--<![endif]-->
<table class="t34" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t33"><p class="t31" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t30" style="margin:0;Margin:0;font-weight:bold;mso-line-height-rule:exactly;">Datum narudžbine:</span></p></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td><div class="t38" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t42" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="600" class="t41" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t41" style="width:600px;">
<!--<![endif]-->
<table class="t40" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t39" style="padding:0 0 15px 0;"><p class="t37" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{orderDate}}</p></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td><div class="t44" style="mso-line-height-rule:exactly;mso-line-height-alt:11px;line-height:11px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t48" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="600" class="t47" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t47" style="width:600px;">
<!--<![endif]-->
<table class="t46" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t45"><p class="t43" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:bold;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Informacije o dostavi</p></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td><div class="t49" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td><div class="t154" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t158" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="600" class="t157" style="background-color:#FFFFFF;width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t157" style="background-color:#FFFFFF;width:600px;">
<!--<![endif]-->
<table class="t156" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t155" style="padding:30px 30px 30px 30px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;">{{#each products}}<tr><td align="center">
<table class="t85" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="540" class="t84" style="background-color:#F0F0F0;width:540px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t84" style="background-color:#F0F0F0;width:540px;">
<!--<![endif]-->
<table class="t83" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t82" style="padding:15px 10px 15px 10px;"><div class="t81" style="width:100%;text-align:left;"><div class="t80" style="display:inline-block;"><table class="t79" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="middle">
<tr class="t78"><td></td><td class="t55" width="124.41558" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t54" style="width:100%;"><tr>
<td class="t51" style="width:10px;" width="10"></td><td class="t52"><div style="font-size:0px;"><img class="t50" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="104.4155844155844" alt="" src="{{this.imageUrl}}"/></div></td><td class="t53" style="width:10px;" width="10"></td>
</tr></table>
</td><td class="t77" width="435.58442" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t76" style="width:100%;"><tr>
<td class="t73" style="width:10px;" width="10"></td><td class="t74"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t60" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="415.5844155844155" class="t59" style="width:415.58px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t59" style="width:415.58px;">
<!--<![endif]-->
<table class="t58" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t57" style="padding:0 0 0 10px;"><p class="t56" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">{{this.name}}</p></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td><div class="t62" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t66" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="415.5844155844155" class="t65" style="width:415.58px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t65" style="width:415.58px;">
<!--<![endif]-->
<table class="t64" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t63" style="padding:0 0 0 10px;"><p class="t61" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">{{this.ean}}</p></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td><div class="t68" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t72" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="415.5844155844155" class="t71" style="border-top:1px solid #CCCCCC;width:415.58px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t71" style="border-top:1px solid #CCCCCC;width:415.58px;">
<!--<![endif]-->
<table class="t70" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t69" style="padding:15px 0 0 10px;"><h1 class="t67" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Količina: {{this.quantity}}</h1></td>
</tr></table>
</td>
</tr></table>
</td></tr></table></td><td class="t75" style="width:10px;" width="10"></td>
</tr></table>
</td>
<td></td></tr>
</table></div></div></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td><div class="t86" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr>{{/each}}<tr><td align="center">
<table class="t153" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="540" class="t152" style="background-color:#F0F0F0;width:540px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t152" style="background-color:#F0F0F0;width:540px;">
<!--<![endif]-->
<table class="t151" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t150" style="padding:30px 40px 30px 40px;"><div class="t149" style="width:100%;text-align:left;"><div class="t148" style="display:inline-block;"><table class="t147" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t146"><td></td><td class="t126" width="243.52941" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t124" style="width:100%;"><tr>
<td class="t123" style="padding:0 5px 0 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t122" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="238.5294117647059" class="t121" style="width:238.53px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t121" style="width:238.53px;">
<!--<![endif]-->
<table class="t120" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t119"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t91" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="238.5294117647059" class="t90" style="width:238.53px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t90" style="width:238.53px;">
<!--<![endif]-->
<table class="t89" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t88"><h1 class="t87" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Podaci o dostavi</h1></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td><div class="t92" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t97" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="238.5294117647059" class="t96" style="width:238.53px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t96" style="width:238.53px;">
<!--<![endif]-->
<table class="t95" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t94"><p class="t93" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">{{customerFullname}}</p></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td align="center">
<table class="t103" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="238.5294117647059" class="t102" style="width:238.53px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t102" style="width:238.53px;">
<!--<![endif]-->
<table class="t101" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t100"><p class="t99" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;"><span class="t98" style="margin:0;Margin:0;mso-line-height-rule:exactly;">{{customerPhoneNumber}}</span></p></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td align="center">
<table class="t108" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="238.5294117647059" class="t107" style="width:238.53px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t107" style="width:238.53px;">
<!--<![endif]-->
<table class="t106" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t105"><p class="t104" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">{{customerEmail}}</p></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td align="center">
<table class="t113" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="238.5294117647059" class="t112" style="width:238.53px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t112" style="width:238.53px;">
<!--<![endif]-->
<table class="t111" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t110"><p class="t109" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">{{customerAddress}}</p></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td align="center">
<table class="t118" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="238.5294117647059" class="t117" style="width:238.53px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t117" style="width:238.53px;">
<!--<![endif]-->
<table class="t116" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t115"><p class="t114" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">{{customerCity}}, {{customerZipcode}}</p></td>
</tr></table>
</td>
</tr></table>
</td></tr></table></td>
</tr></table>
</td>
</tr></table>
</td></tr></table></td>
</tr></table>
<!--[if !mso]>-->
<div class="t125" style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;&nbsp;</div>
<!--<![endif]-->
</td><td class="t145" width="216.47059" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t143" style="width:100%;"><tr>
<td class="t142" style="padding:0 5px 0 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t141" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="211.47058823529414" class="t140" style="width:211.47px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t140" style="width:211.47px;">
<!--<![endif]-->
<table class="t139" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t138"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t131" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="211.47058823529414" class="t130" style="width:211.47px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t130" style="width:211.47px;">
<!--<![endif]-->
<table class="t129" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t128"><h1 class="t127" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Način plaćanja</h1></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td><div class="t132" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t137" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="211.47058823529414" class="t136" style="width:211.47px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t136" style="width:211.47px;">
<!--<![endif]-->
<table class="t135" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t134"><p class="t133" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">{{paymentMethod}}</p></td>
</tr></table>
</td>
</tr></table>
</td></tr></table></td>
</tr></table>
</td>
</tr></table>
</td></tr></table></td>
</tr></table>
<!--[if !mso]>-->
<div class="t144" style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;&nbsp;</div>
<!--<![endif]-->
</td>
<td></td></tr>
</table></div></div></td>
</tr></table>
</td>
</tr></table>
</td></tr></table></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td><div class="t226" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t230" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="600" class="t229" style="background-color:#FFFFFF;width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t229" style="background-color:#FFFFFF;width:600px;">
<!--<![endif]-->
<table class="t228" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t227" style="padding:0 30px 25px 30px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t175" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="540" class="t174" style="border-top:1px solid #CCCCCC;width:540px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t174" style="border-top:1px solid #CCCCCC;width:540px;">
<!--<![endif]-->
<table class="t173" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t172" style="padding:20px 0 20px 0;"><div class="t171" style="width:100%;text-align:left;"><div class="t170" style="display:inline-block;"><table class="t169" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t168"><td></td><td class="t162" width="270" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t161" style="width:100%;"><tr>
<td class="t160"><p class="t159" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:700;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#222222;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Cena proizvoda</p></td>
</tr></table>
</td><td class="t167" width="270" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t166" style="width:100%;"><tr>
<td class="t165"><p class="t164" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:700;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#222222;text-align:right;mso-line-height-rule:exactly;mso-text-raise:2px;">{{productsPrice}} <span class="t163" style="margin:0;Margin:0;font-weight:700;font-size:14px;mso-line-height-rule:exactly;">RSD</span></p></td>
</tr></table>
</td>
<td></td></tr>
</table></div></div></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td align="center">
<table class="t192" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="540" class="t191" style="width:540px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t191" style="width:540px;">
<!--<![endif]-->
<table class="t190" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t189" style="padding:0 0 20px 0;"><div class="t188" style="width:100%;text-align:left;"><div class="t187" style="display:inline-block;"><table class="t186" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t185"><td></td><td class="t179" width="270" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t178" style="width:100%;"><tr>
<td class="t177"><p class="t176" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:500;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#777777;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Popust</p></td>
</tr></table>
</td><td class="t184" width="270" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t183" style="width:100%;"><tr>
<td class="t182"><p class="t181" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:700;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#18B53A;text-align:right;mso-line-height-rule:exactly;mso-text-raise:2px;">-{{discount}} <span class="t180" style="margin:0;Margin:0;font-size:14px;mso-line-height-rule:exactly;">RSD</span></p></td>
</tr></table>
</td>
<td></td></tr>
</table></div></div></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td align="center">
<table class="t209" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="540" class="t208" style="width:540px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t208" style="width:540px;">
<!--<![endif]-->
<table class="t207" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t206" style="padding:0 0 20px 0;"><div class="t205" style="width:100%;text-align:left;"><div class="t204" style="display:inline-block;"><table class="t203" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t202"><td></td><td class="t196" width="270" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t195" style="width:100%;"><tr>
<td class="t194"><p class="t193" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:500;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#777777;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Cena poštarine</p></td>
</tr></table>
</td><td class="t201" width="270" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t200" style="width:100%;"><tr>
<td class="t199"><p class="t198" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:700;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#777777;text-align:right;mso-line-height-rule:exactly;mso-text-raise:2px;">{{shippingPrice}} <span class="t197" style="margin:0;Margin:0;font-size:14px;mso-line-height-rule:exactly;">RSD</span></p></td>
</tr></table>
</td>
<td></td></tr>
</table></div></div></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td align="center">
<table class="t225" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="540" class="t224" style="border-top:1px solid #CCCCCC;width:540px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t224" style="border-top:1px solid #CCCCCC;width:540px;">
<!--<![endif]-->
<table class="t223" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t222" style="padding:20px 0 20px 0;"><div class="t221" style="width:100%;text-align:left;"><div class="t220" style="display:inline-block;"><table class="t219" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t218"><td></td><td class="t213" width="252.9274" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t212" style="width:100%;"><tr>
<td class="t211"><p class="t210" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:44px;font-weight:800;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;direction:ltr;color:#222222;text-align:left;mso-line-height-rule:exactly;mso-text-raise:6px;">Ukupna cena</p></td>
</tr></table>
</td><td class="t217" width="287.0726" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t216" style="width:100%;"><tr>
<td class="t215"><p class="t214" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:44px;font-weight:800;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;direction:ltr;color:#222222;text-align:right;mso-line-height-rule:exactly;mso-text-raise:6px;">{{totalPrice}} RSD</p></td>
</tr></table>
</td>
<td></td></tr>
</table></div></div></td>
</tr></table>
</td>
</tr></table>
</td></tr></table></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td><div class="t231" style="mso-line-height-rule:exactly;mso-line-height-alt:40px;line-height:40px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td><div class="t236" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t240" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="600" class="t239" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t239" style="width:600px;">
<!--<![endif]-->
<table class="t238" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t237"><p class="t235" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#F8F8F8;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t232" style="margin:0;Margin:0;color:#333333;mso-line-height-rule:exactly;">Ako imate bilo kakvih pitanja ili Vam je potrebna dodatna pomoć, kontaktirate nas na adresi </span><span class="t233" style="margin:0;Margin:0;color:#881337;mso-line-height-rule:exactly;">prodaja.nextcomputers@gmail.com</span><span class="t234" style="margin:0;Margin:0;color:#333333;mso-line-height-rule:exactly;">.</span></p></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td><div class="t244" style="mso-line-height-rule:exactly;mso-line-height-alt:31px;line-height:31px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t248" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="600" class="t247" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t247" style="width:600px;">
<!--<![endif]-->
<table class="t246" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t245"><p class="t243" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">Hvala Vam što ste izabrali <span class="t242" style="margin:0;Margin:0;mso-line-height-rule:exactly;"><span class="t241" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">nextcomputers.rs!</span></span></p></td>
</tr></table>
</td>
</tr></table>
</td></tr></table></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td align="center">
<table class="t307" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="700" class="t306" style="background-color:#242424;width:700px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t306" style="background-color:#242424;width:700px;">
<!--<![endif]-->
<table class="t305" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t304" style="padding:20px 50px 20px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t279" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="200" class="t278" style="width:200px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t278" style="width:200px;">
<!--<![endif]-->
<table class="t277" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t276" style="padding:10px 0 6px 0;"><div class="t275" style="width:100%;text-align:center;"><div class="t274" style="display:inline-block;"><table class="t273" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top">
<tr class="t272"><td></td><td class="t259" width="36" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t258" style="width:100%;"><tr>
<td class="t255" style="width:10px;" width="10"></td><td class="t256"><a href="https://www.instagram.com/nextcomputers.rs/" style="font-size:0px;" target="_blank"><img class="t254" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="16" height="16" alt="" src="https://152dc0dc-08a0-4a85-a8b7-0808d7f6ef7e.b-cdn.net/e/8e3eee7d-c53d-49d6-b4ba-c46cbcba1f26/49fc573e-8d7e-4d23-a39c-96a9372dd729.png"/></a></td><td class="t257" style="width:10px;" width="10"></td>
</tr></table>
</td><td class="t265" width="36" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t264" style="width:100%;"><tr>
<td class="t261" style="width:10px;" width="10"></td><td class="t262"><div style="font-size:0px;"><img class="t260" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="16" height="16" alt="" src="https://152dc0dc-08a0-4a85-a8b7-0808d7f6ef7e.b-cdn.net/e/8e3eee7d-c53d-49d6-b4ba-c46cbcba1f26/add15264-8e3f-4c16-9304-8ad1d6dc7a2a.png"/></div></td><td class="t263" style="width:10px;" width="10"></td>
</tr></table>
</td><td class="t271" width="36" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t270" style="width:100%;"><tr>
<td class="t267" style="width:10px;" width="10"></td><td class="t268"><div style="font-size:0px;"><img class="t266" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="16" height="16" alt="" src="https://152dc0dc-08a0-4a85-a8b7-0808d7f6ef7e.b-cdn.net/e/8e3eee7d-c53d-49d6-b4ba-c46cbcba1f26/65c002a1-0118-4ec1-90d5-410f14131ef8.png"/></div></td><td class="t269" style="width:10px;" width="10"></td>
</tr></table>
</td>
<td></td></tr>
</table></div></div></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td><div class="t280" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t296" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="600" class="t295" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t295" style="width:600px;">
<!--<![endif]-->
<table class="t294" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t293" style="padding:0 15px 0 15px;"><div class="t292" style="width:100%;text-align:center;"><div class="t291" style="display:inline-block;"><table class="t290" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="middle">
<tr class="t289"><td></td><td class="t284" width="14" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t283" style="width:100%;"><tr>
<td class="t282"><div style="font-size:0px;"><img class="t281" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="14" height="14" alt="" src="https://152dc0dc-08a0-4a85-a8b7-0808d7f6ef7e.b-cdn.net/e/8e3eee7d-c53d-49d6-b4ba-c46cbcba1f26/a11bf24a-884f-4dd8-a9b5-ddd2b01e5d9e.png"/></div></td>
</tr></table>
</td><td class="t288" width="229" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t287" style="width:100%;"><tr>
<td class="t286"><p class="t285" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#F8F8F8;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">2024 nextcomputers.rs. Sva prava zadržana.</p></td>
</tr></table>
</td>
<td></td></tr>
</table></div></div></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td><div class="t299" style="mso-line-height-rule:exactly;mso-line-height-alt:5px;line-height:5px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t303" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="600" class="t302" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t302" style="width:600px;">
<!--<![endif]-->
<table class="t301" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t300"><p class="t298" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;"><span class="t297" style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;">nextcomputers.rs</span></p></td>
</tr></table>
</td>
</tr></table>
</td></tr></table></td>
</tr></table>
</td>
</tr></table>
</td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
</html>
`

export const template = Handlebars.compile(orderConfirmationTemplate)
