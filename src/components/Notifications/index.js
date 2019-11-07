import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container,
  Badge,
  Scroll,
  NotificationList,
  Notification,
} from './styles';
import {
  notificationsRequest,
  notificationsToggleRequest,
} from '~/store/modules/notifications/actions';

export default function Notifications() {
  const dispatch = useDispatch();
  const notifications = useSelector(state =>
    state.notifications.notifications.map(notification => ({
      ...notification,
      timeDistance: formatDistance(
        parseISO(notification.createdAt),
        new Date(),
        { addSuffix: true, locale: pt }
      ),
    }))
  );
  const [visible, setVisible] = useState(false);

  const hasUnread = useMemo(
    () => !!notifications.find(notification => notification.read === false),
    [notifications]
  );

  useEffect(() => {
    dispatch(notificationsRequest());
  }, [dispatch]);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(notification => (
            <Notification key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.timeDistance}</time>
              <button
                type="button"
                onClick={() =>
                  dispatch(notificationsToggleRequest(notification._id))
                }
              >
                Marcar como {notification.read ? ' não ' : ''}lida
              </button>
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
