import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';
import SendOutlined from '@mui/icons-material/SendOutlined';
import Face from '@mui/icons-material/Face';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import img from '../images/san1.jpg'

export default function InstagramPost() {
  return (
    <Card variant="outlined">
      <CardContent orientation="horizontal" sx={{ alignItems: 'center', gap: 1 }}>
        <Box>
          <Avatar size="sm" src="/static/logo.png" sx={{ p: 0.5, border: '2px solid', borderColor: 'background.body' }} />
        </Box>
        <Typography fontWeight="lg">Shawarma Hatab</Typography>
        <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}>
          <MoreHoriz />
        </IconButton>
      </CardContent>
      <CardOverflow>
        <AspectRatio>
         <img src={img} alt="background"  loading="lazy" />
        </AspectRatio>
      </CardOverflow>
      <CardContent orientation="horizontal" sx={{ alignItems: 'center', mx: -1 }}>
        <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
          <IconButton variant="plain" color="neutral" size="sm">
            <FavoriteBorder />
          </IconButton>
          <IconButton variant="plain" color="neutral" size="sm">
            <ModeCommentOutlined />
          </IconButton>
          <IconButton variant="plain" color="neutral" size="sm">
            <SendOutlined />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mx: 'auto' }}>
          {[...Array(5)].map((_, index) => (
            <Box key={index} sx={{ borderRadius: '50%', width: `max(${6 - index}px, 3px)`, height: `max(${6 - index}px, 3px)`, bgcolor: index === 0 ? 'primary.solidBg' : 'background.level3' }} />
          ))}
        </Box>
        <Box sx={{ width: 0, display: 'flex', flexDirection: 'row-reverse' }}>
          <IconButton variant="plain" color="neutral" size="sm">
            <BookmarkBorderRoundedIcon />
          </IconButton>
        </Box>
      </CardContent>
      <CardContent>
        <Link component="button" underline="none" fontSize="sm" fontWeight="lg" textColor="text.primary">
          8.1M Likes
        </Link>
        <Typography fontSize="sm">
          <Link component="button" color="neutral" fontWeight="lg" textColor="text.primary">
            Shawarma  Hatab
          </Link> The best shawarma sandwiches. Order now.
        </Typography>
        <Link component="button" underline="none" fontSize="sm" startDecorator="…" sx={{ color: 'text.tertiary' }}>
          more
        </Link>
        <Link component="button" underline="none" fontSize="10px" sx={{ color: 'text.tertiary', my: 0.5 }}>
          2 DAYS AGO
        </Link>
      </CardContent>
      <CardContent orientation="horizontal" sx={{ gap: 1 }}>
        <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: -1 }}>
          <Face />
        </IconButton>
        <Input variant="plain" size="sm" placeholder="Add a comment…" sx={{ flex: 1, px: 0, '--Input-focusedThickness': '0px' }} />
        <Link disabled underline="none" role="button">
          Post
        </Link>
      </CardContent>
    </Card>
  );
}