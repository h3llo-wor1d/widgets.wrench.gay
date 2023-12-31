export const theme1Style = `
@import url('https://fonts.googleapis.com/css?family={font_picked}');

* {
    box-sizing: border-box;
}

html, body {
    height: 100%;
    overflow: hidden;
}

body {
    font-family: '{font_picked}', 'Helvetica Neue', sans-serif;
    line-height: 1.{chat_line_height}em;
}

.colon {
    display: none;
}

div#custom_html {
    background: {wrapper_background};
    height: 100%;
    border-radius: {wrapper_border_radius}px;
    border-width: {wrapper_border_width}px;
    border-color: {wrapper_border_color};
    border-style: {wrapper_border_style};
    font-size: {font_size}px;
    text-transform: {text_transform};
}

#log {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: {chatbox_padding}px;
    width: 100%;
    opacity: 1;
}

#log>div.deleted {
    visibility: hidden;
}

#log>div {
    margin-bottom: {message_spacing}px;
    animation: fadeOut 0.5s ease {message_hide_delay} forwards;
    -webkit-animation: fadeOut 0.5s ease {message_hide_delay} forwards;
}

.message-box {
    background-color: {message_background_color};
    padding: 2px 8px;
    border-radius: {message_border_radius}px;
    border-width: {message_border_width}px;
    border-color: {message_border_color};
    border-style: {message_border_style};
}

.child.meta {
    display: initial;
}

.name {
    color: {name_color};
    font-weight: {name_weight};
}

.message {
    color: {message_color};
    font-weight: {message_weight};
}

.reply_to {
    display: inline-block;
    font-size: 0.8em;
    opacity: 0.8;
    padding: 2px 8px; /* similar to message-box */
    margin-bottom: -5px;
}

.border {
    border:1px solid {reply_border_color};
    border-radius: 6px;
}

.reply_svg {
    margin-right: 0.2em;
    vertical-align: middle;
}

@media screen and (max-width: 300px) {
    .reply_svg {
        display: none !important;
    }
}

.badges {
    vertical-align: middle;
}

.badge {
    margin-right: 2px;
    height: 1em;
}

/* Emote */

#log .emote {
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    padding: 0.4em 0.2em;
    position: relative;
}

#log .emote img {
    display: inline-block;
    height: 1em;
    opacity: 0;
}

/* Announcement */

.announcement {
    padding: {announce_padding}px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    margin-bottom: {announce_margin}px!important;
    margin-top: {announce_margin}px!important;
}

.svg_announcement {
    margin-right: 2px;
    vertical-align: middle;
}

.announcement_name {
    display: {announcement_name};
}

.announcement_primary {
    background: {announce_primary_background_color}!important;
    color: {announce_primary_text_color}!important;
}

.announcement_blue {
    background: {announce_primary_background_color}!important;
    color: {announce_primary_text_color}!important;
}

.announcement_green {
    background: {announce_primary_background_color}!important;
    color: {announce_primary_text_color}!important;
}

.announcement_orange {
    background: {announce_primary_background_color}!important;
    color: {announce_primary_text_color}!important;
}

.announcement-purple {
    background: {announce_primary_background_color}!important;
    color: {announce_primary_text_color}!important;
}`