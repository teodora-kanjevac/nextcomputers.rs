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
.t248{padding-left:30px!important;padding-right:30px!important}.t8{padding-bottom:20px!important}.t6{line-height:28px!important;font-size:26px!important;letter-spacing:-1.04px!important}.t296{padding:40px 30px!important}.t268{padding-bottom:36px!important}.t234,.t264,.t281{text-align:center!important}.t144,.t166,.t183,.t200,.t216,.t77{text-align:left!important}.t253,.t255,.t259,.t261,.t53{display:revert!important}.t123,.t142,.t144,.t145{display:block!important}.t257,.t263{vertical-align:top!important;width:36px!important}.t276,.t280{vertical-align:middle!important}.t1{padding-bottom:50px!important}.t3{width:80px!important}.t280{width:229px!important}.t276{width:14px!important}.t225{padding:30px!important}.t121,.t140{padding-right:0!important}.t160,.t165,.t177,.t182,.t194,.t199,.t211{vertical-align:top!important;width:600px!important}.t215{vertical-align:top!important;width:681px!important}.t55,.t76{vertical-align:middle!important}.t55{width:210px!important}.t76{width:800px!important}.t58,.t70{padding-left:0!important}.t123,.t142{mso-line-height-alt:15px!important;line-height:15px!important}.t124,.t143{vertical-align:top!important;display:inline-block!important;width:100%!important}.t124{max-width:900px!important}.t121{padding-bottom:15px!important}.t143{max-width:800px!important}
}
</style>
<!--[if !mso]>-->
<link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600;700&amp;family=Inter+Tight:wght@500;600;700&amp;display=swap" rel="stylesheet" type="text/css" />
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
<body id="body" class="t302" style="min-width:100%;Margin:0px;padding:0px;background-color:#FFFFFF;"><div class="t301" style="background-color:#FFFFFF;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t300" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#FFFFFF;" valign="top" align="center">
<!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#FFFFFF"/>
</v:background>
<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td align="center">
<table class="t251" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="700" class="t250" style="background-color:#F8F8F8;width:700px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t250" style="background-color:#F8F8F8;width:700px;">
<!--<![endif]-->
<table class="t249" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t248" style="padding:0 50px 40px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="left">
<table class="t4" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr>
<!--[if mso]>
<td width="130" class="t3" style="width:130px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t3" style="width:130px;">
<!--<![endif]-->
<table class="t2" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t1" style="padding:0 0 60px 0;"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="130" height="130" alt="" src="https://nextcomputers.rs/assets/images/logo.webp"/></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t7" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t11" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="600" class="t10" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t10" style="width:600px;">
<!--<![endif]-->
<table class="t9" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t8" style="padding:0 0 15px 0;"><h1 class="t6" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:600;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#191919;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;"><span class="t5" style="margin:0;Margin:0;mso-line-height-rule:exactly;">Pozdrav </span>{{customerFullname}},</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t13" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t17" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="600" class="t16" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t16" style="width:600px;">
<!--<![endif]-->
<table class="t15" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t14" style="padding:0 0 22px 0;"><p class="t12" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Hvala Vam na kupovini! Sa zadovoljstvom Vas obaveštavamo da smo primili Vašu porudžbinu i da je trenutno u obradi. U nastavku su detalji o Vašoj kupovini:</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t20" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t24" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="600" class="t23" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t23" style="width:600px;">
<!--<![endif]-->
<table class="t22" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t21"><p class="t19" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t18" style="margin:0;Margin:0;font-weight:bold;mso-line-height-rule:exactly;">Broj narudžbine:</span></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t26" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t30" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="600" class="t29" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t29" style="width:600px;">
<!--<![endif]-->
<table class="t28" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t27" style="padding:0 0 10px 0;"><p class="t25" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{orderId}}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t33" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t37" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="600" class="t36" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t36" style="width:600px;">
<!--<![endif]-->
<table class="t35" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t34"><p class="t32" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t31" style="margin:0;Margin:0;font-weight:bold;mso-line-height-rule:exactly;">Datum narudžbine:</span></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t39" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t43" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="600" class="t42" style="border-bottom:1px solid #CCCCCC;width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t42" style="border-bottom:1px solid #CCCCCC;width:600px;">
<!--<![endif]-->
<table class="t41" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t40" style="padding:0 0 15px 0;"><p class="t38" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{orderDate}}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t45" style="mso-line-height-rule:exactly;mso-line-height-alt:26px;line-height:26px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t49" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="600" class="t48" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t48" style="width:600px;">
<!--<![endif]-->
<table class="t47" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t46"><p class="t44" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:bold;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Informacije o dostavi</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t50" style="mso-line-height-rule:exactly;mso-line-height-alt:15px;line-height:15px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td><div class="t152" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t156" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="600" class="t155" style="background-color:#FFFFFF;width:620px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t155" style="background-color:#FFFFFF;width:620px;">
<!--<![endif]-->
<table class="t154" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t153" style="padding:25px 25px 20px 25px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;">{{#each products}}<tr><td align="center">
<table class="t84" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="550" class="t83" style="background-color:#F0F0F0;width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t83" style="background-color:#F0F0F0;width:600px;">
<!--<![endif]-->
<table class="t82" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t81" style="padding:20px 10px 15px 10px;"><div class="t80" style="width:100%;text-align:left;"><div class="t79" style="display:inline-block;"><table class="t78" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="middle">
<tr class="t77"><td></td><td class="t55" width="114" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t54" style="width:100%;"><tr><td class="t52"><div style="font-size:0px;"><img class="t51" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="104" alt="" src="{{this.imageUrl}}"/></div></td><td class="t53" style="width:10px;" width="10"></td></tr></table>
</td><td class="t76" width="416" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t75" style="width:100%;"><tr><td class="t74"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t61" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="416" class="t60" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t60" style="width:600px;">
<!--<![endif]-->
<table class="t59" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t58" style="padding:0 0 0 10px;"><p class="t57" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#777777;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;"><a class="t56" href="https://nextcomputers.rs/proizvod/{{this.id}}" style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#777777;mso-line-height-rule:exactly;" target="_blank">{{this.name}}</a></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t63" style="mso-line-height-rule:exactly;mso-line-height-alt:5px;line-height:5px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t67" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="416" class="t66" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t66" style="width:600px;">
<!--<![endif]-->
<table class="t65" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t64" style="padding:0 0 0 10px;"><p class="t62" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">{{this.ean}}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t69" style="mso-line-height-rule:exactly;mso-line-height-alt:5px;line-height:5px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t73" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="416" class="t72" style="border-top:1px solid #CCCCCC;width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t72" style="border-top:1px solid #CCCCCC;width:600px;">
<!--<![endif]-->
<table class="t71" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t70" style="padding:15px 0 0 10px;"><h1 class="t68" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Količina: {{this.quantity}}</h1></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t85" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr>{{/each}}<tr><td align="center">
<table class="t151" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="550" class="t150" style="background-color:#F0F0F0;width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t150" style="background-color:#F0F0F0;width:600px;">
<!--<![endif]-->
<table class="t149" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t148" style="padding:30px 40px 30px 40px;"><div class="t147" style="width:100%;text-align:left;"><div class="t146" style="display:inline-block;"><table class="t145" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t144"><td></td><td class="t124" width="248.82353" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t122" style="width:100%;"><tr><td class="t121" style="padding:0 5px 0 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t120" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="243.82352941176472" class="t119" style="width:798px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t119" style="width:798px;">
<!--<![endif]-->
<table class="t118" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t117"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t90" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="243.82352941176472" class="t89" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t89" style="width:600px;">
<!--<![endif]-->
<table class="t88" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t87"><h1 class="t86" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Podaci o dostavi</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t91" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t96" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="243.82352941176472" class="t95" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t95" style="width:600px;">
<!--<![endif]-->
<table class="t94" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t93"><p class="t92" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{customerFullname}}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t101" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="243.82352941176472" class="t100" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t100" style="width:600px;">
<!--<![endif]-->
<table class="t99" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t98"><p class="t97" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{customerPhoneNumber}}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t106" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="243.82352941176472" class="t105" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t105" style="width:600px;">
<!--<![endif]-->
<table class="t104" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t103"><p class="t102" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{customerEmail}}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t111" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="243.82352941176472" class="t110" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t110" style="width:600px;">
<!--<![endif]-->
<table class="t109" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t108"><p class="t107" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{customerAddress}}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t116" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="243.82352941176472" class="t115" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t115" style="width:600px;">
<!--<![endif]-->
<table class="t114" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t113"><p class="t112" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{customerCity}}, {{customerZipcode}}</p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
<!--[if !mso]>-->
<div class="t123" style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;&nbsp;</div>
<!--<![endif]-->
</td><td class="t143" width="221.17647" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t141" style="width:100%;"><tr><td class="t140" style="padding:0 5px 0 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t139" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="216.1764705882353" class="t138" style="width:670px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t138" style="width:670px;">
<!--<![endif]-->
<table class="t137" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t136"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t129" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="216.1764705882353" class="t128" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t128" style="width:600px;">
<!--<![endif]-->
<table class="t127" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t126"><h1 class="t125" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Način plaćanja</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t130" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t135" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="216.1764705882353" class="t134" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t134" style="width:600px;">
<!--<![endif]-->
<table class="t133" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t132"><p class="t131" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{paymentMethod}}</p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
<!--[if !mso]>-->
<div class="t142" style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;&nbsp;</div>
<!--<![endif]-->
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t224" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t228" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="600" class="t227" style="background-color:#FFFFFF;width:620px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t227" style="background-color:#FFFFFF;width:620px;">
<!--<![endif]-->
<table class="t226" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t225" style="padding:0 25px 0 25px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t173" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="550" class="t172" style="border-top:1px solid #CCCCCC;width:800px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t172" style="border-top:1px solid #CCCCCC;width:800px;">
<!--<![endif]-->
<table class="t171" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t170" style="padding:20px 0 10px 0;"><div class="t169" style="width:100%;text-align:left;"><div class="t168" style="display:inline-block;"><table class="t167" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t166"><td></td><td class="t160" width="275" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t159" style="width:100%;"><tr><td class="t158"><p class="t157" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:600;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#222222;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Cena proizvoda</p></td></tr></table>
</td><td class="t165" width="275" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t164" style="width:100%;"><tr><td class="t163"><p class="t162" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:600;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#222222;text-align:right;mso-line-height-rule:exactly;mso-text-raise:2px;">{{productsPrice}} <span class="t161" style="margin:0;Margin:0;font-size:14px;mso-line-height-rule:exactly;">RSD</span></p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t190" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="550" class="t189" style="width:800px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t189" style="width:800px;">
<!--<![endif]-->
<table class="t188" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t187" style="padding:0 0 10px 0;"><div class="t186" style="width:100%;text-align:left;"><div class="t185" style="display:inline-block;"><table class="t184" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t183"><td></td><td class="t177" width="275" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t176" style="width:100%;"><tr><td class="t175"><p class="t174" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:500;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#777777;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Popust</p></td></tr></table>
</td><td class="t182" width="275" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t181" style="width:100%;"><tr><td class="t180"><p class="t179" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:700;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#18B53A;text-align:right;mso-line-height-rule:exactly;mso-text-raise:2px;">-{{discount}} <span class="t178" style="margin:0;Margin:0;font-size:14px;mso-line-height-rule:exactly;">RSD</span></p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t207" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="550" class="t206" style="width:800px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t206" style="width:800px;">
<!--<![endif]-->
<table class="t205" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t204" style="padding:0 0 15px 0;"><div class="t203" style="width:100%;text-align:left;"><div class="t202" style="display:inline-block;"><table class="t201" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t200"><td></td><td class="t194" width="275" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t193" style="width:100%;"><tr><td class="t192"><p class="t191" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:500;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#777777;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Cena poštarine</p></td></tr></table>
</td><td class="t199" width="275" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t198" style="width:100%;"><tr><td class="t197"><p class="t196" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:700;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#777777;text-align:right;mso-line-height-rule:exactly;mso-text-raise:2px;">{{shippingPrice}} <span class="t195" style="margin:0;Margin:0;font-size:14px;mso-line-height-rule:exactly;">RSD</span></p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t223" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="550" class="t222" style="border-top:1px solid #CCCCCC;width:800px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t222" style="border-top:1px solid #CCCCCC;width:800px;">
<!--<![endif]-->
<table class="t221" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t220" style="padding:15px 0 15px 0;"><div class="t219" style="width:100%;text-align:left;"><div class="t218" style="display:inline-block;"><table class="t217" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t216"><td></td><td class="t211" width="257.61124" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t210" style="width:100%;"><tr><td class="t209"><p class="t208" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:44px;font-weight:600;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;direction:ltr;color:#222222;text-align:left;mso-line-height-rule:exactly;mso-text-raise:6px;">Ukupna cena</p></td></tr></table>
</td><td class="t215" width="292.38876" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t214" style="width:100%;"><tr><td class="t213"><p class="t212" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:44px;font-weight:600;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;direction:ltr;color:#222222;text-align:right;mso-line-height-rule:exactly;mso-text-raise:6px;">{{totalPrice}} RSD</p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t229" style="mso-line-height-rule:exactly;mso-line-height-alt:40px;line-height:40px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td><div class="t235" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t239" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="600" class="t238" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t238" style="width:600px;">
<!--<![endif]-->
<table class="t237" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t236"><p class="t234" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#F8F8F8;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t230" style="margin:0;Margin:0;color:#333333;mso-line-height-rule:exactly;">Ako imate bilo kakvih pitanja ili Vam je potrebna dodatna pomoć, kontaktirate nas na adresi </span><a class="t233" href="mailto:prodaja.nextcomputers@gmail.com" style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;" target="_blank"><span class="t231" style="margin:0;Margin:0;color:#BA4A66;mso-line-height-rule:exactly;">prodaja.nextcomputers@gmail.com</span><span class="t232" style="margin:0;Margin:0;color:#333333;mso-line-height-rule:exactly;">.</span></a></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t243" style="mso-line-height-rule:exactly;mso-line-height-alt:31px;line-height:31px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t247" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="600" class="t246" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t246" style="width:600px;">
<!--<![endif]-->
<table class="t245" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t244"><p class="t242" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">Hvala Vam što ste izabrali <span class="t241" style="margin:0;Margin:0;mso-line-height-rule:exactly;"><span class="t240" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">nextcomputers.rs!</span></span></p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t299" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="700" class="t298" style="background-color:#242424;width:700px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t298" style="background-color:#242424;width:700px;">
<!--<![endif]-->
<table class="t297" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t296" style="padding:20px 50px 20px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t271" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="100" class="t270" style="width:100px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t270" style="width:100px;">
<!--<![endif]-->
<table class="t269" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t268" style="padding:10px 0 10px 0;"><div class="t267" style="width:100%;text-align:center;"><div class="t266" style="display:inline-block;"><table class="t265" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top">
<tr class="t264"><td></td><td class="t257" width="36" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t256" style="width:100%;"><tr><td class="t253" style="width:10px;" width="10"></td><td class="t254"><a href="https://www.instagram.com/nextcomputers.rs/" style="font-size:0px;" target="_blank"><img class="t252" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="16" height="16" alt="" src="https://152dc0dc-08a0-4a85-a8b7-0808d7f6ef7e.b-cdn.net/e/8e3eee7d-c53d-49d6-b4ba-c46cbcba1f26/c41bd334-9038-40ed-862c-9064cc755f74.png"/></a></td><td class="t255" style="width:10px;" width="10"></td></tr></table>
</td><td class="t263" width="36" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t262" style="width:100%;"><tr><td class="t259" style="width:10px;" width="10"></td><td class="t260"><a href="https://www.linkedin.com/company/nextcomputers" style="font-size:0px;" target="_blank"><img class="t258" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="16" height="16" alt="" src="https://152dc0dc-08a0-4a85-a8b7-0808d7f6ef7e.b-cdn.net/e/8e3eee7d-c53d-49d6-b4ba-c46cbcba1f26/3bca1b8f-cbe8-4c83-baf7-ca78ecb0e28b.png"/></a></td><td class="t261" style="width:10px;" width="10"></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t272" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t288" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="600" class="t287" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t287" style="width:600px;">
<!--<![endif]-->
<table class="t286" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t285" style="padding:0 15px 0 15px;"><div class="t284" style="width:100%;text-align:center;"><div class="t283" style="display:inline-block;"><table class="t282" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="middle">
<tr class="t281"><td></td><td class="t276" width="14" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t275" style="width:100%;"><tr><td class="t274"><div style="font-size:0px;"><img class="t273" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="14" height="14" alt="" src="https://152dc0dc-08a0-4a85-a8b7-0808d7f6ef7e.b-cdn.net/e/8e3eee7d-c53d-49d6-b4ba-c46cbcba1f26/a11bf24a-884f-4dd8-a9b5-ddd2b01e5d9e.png"/></div></td></tr></table>
</td><td class="t280" width="229" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t279" style="width:100%;"><tr><td class="t278"><p class="t277" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#F8F8F8;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">2025 nextcomputers.rs. Sva prava zadržana.</p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t291" style="mso-line-height-rule:exactly;mso-line-height-alt:5px;line-height:5px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t295" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="600" class="t294" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t294" style="width:600px;">
<!--<![endif]-->
<table class="t293" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t292"><p class="t290" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;"><a class="t289" href="https://nextcomputers.rs" style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;" target="_blank">nextcomputers.rs</a></p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
</html>
`

export const orderConfirmationTemplate = Handlebars.compile(template)
